import { fulfilled$$$, IObservable, pipe$$, singleN } from '@lirx/core';
import { getOptimalBufferSize } from '../../../../../helpers/get-optimal-buffer-size';
import { IFileSystemReadFunction } from '../../../../core/read/file-system.read.function-definition';
import {
  IFileSystemWriteFunction,
  IFileSystemWriteFunctionNotifications,
} from '../../../../core/write/file-system.write.function-definition';
import { IFileSystemCopyFileFunction, IFileSystemCopyFileFunctionNotifications } from '../file-system.copy-file.function-definition';

export function createFileSystemCopyFileUsingWrite(
  sourceReadFunction: IFileSystemReadFunction,
  destinationWriteFunction: IFileSystemWriteFunction,
): IFileSystemCopyFileFunction {
  return (
    sourceURL: URL,
    destinationURL: URL,
  ): IObservable<IFileSystemCopyFileFunctionNotifications> => {
    return fileSystemCopyFileUsingReadAndWrite({
      sourceReadFunction,
      destinationWriteFunction,
      sourceURL,
      destinationURL,
    });
  };
}

interface IFileSystemCopyFileUsingReadAndWriteOptions extends IFileSystemCopyFileByChunkOptions {
}

export function fileSystemCopyFileUsingReadAndWrite(
  options: IFileSystemCopyFileUsingReadAndWriteOptions,
): IObservable<IFileSystemCopyFileFunctionNotifications> {
  return fileSystemCopyFileByChunk(options);
}

interface IFileSystemCopyFileByChunkOptions extends Omit<IFileSystemCopyFileChunkOptions, 'buffer' | 'start'> {
}

/**
 * Splits the copy of a file in chunks, using an optimal chunk's size based on available memory.
 * This allows the copy of massive file, like if it was a stream
 */
function fileSystemCopyFileByChunk(
  options: IFileSystemCopyFileByChunkOptions,
): IObservable<IFileSystemCopyFileFunctionNotifications> {
  const copyFileChunk = (
    start: number,
    buffer: Uint8Array,
  ): IObservable<IFileSystemCopyFileFunctionNotifications> => {
    return pipe$$(fileSystemCopyFileChunk({
      ...options,
      buffer,
      start,
    }), [
      fulfilled$$$((size: number): IObservable<IFileSystemCopyFileFunctionNotifications> => {
        return (size === start)
          ? singleN<URL>(options.destinationURL)
          : copyFileChunk(
            size,
            buffer,
          );
      }),
    ]);
  };

  return copyFileChunk(
    0,
    new Uint8Array(getOptimalBufferSize()),
  );
}

interface IFileSystemCopyFileChunkOptions {
  sourceReadFunction: IFileSystemReadFunction;
  destinationWriteFunction: IFileSystemWriteFunction;
  sourceURL: URL;
  destinationURL: URL;
  buffer: Uint8Array;
  start: number;
}

/**
 * Copy a portion of a File
 */
function fileSystemCopyFileChunk(
  {
    sourceReadFunction,
    destinationWriteFunction,
    sourceURL,
    destinationURL,
    buffer,
    start,
  }: IFileSystemCopyFileChunkOptions,
): IObservable<IFileSystemWriteFunctionNotifications> {
  return pipe$$(sourceReadFunction(sourceURL, buffer), [
    fulfilled$$$((buffer: Uint8Array): IObservable<IFileSystemWriteFunctionNotifications> => {
      return destinationWriteFunction(destinationURL, buffer, { start });
    }),
  ]);
}
