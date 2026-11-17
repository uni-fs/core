import { Path } from '@lifaon/path';
import { Abortable, AsyncTask, IEnsureAsyncTaskConstrained } from '@lirx/async-task';
import { Stats } from 'node:fs';
import { FileHandle, FileReadResult, open, readFile, stat, writeFile } from 'node:fs/promises';

import { Entry } from '../../../entry/implementations/entry.abstract-class';
import { IEntryGetMetadataOptions } from '../../../entry/traits/get-metadata/file.get-metadata.function-definition';
import { IEntryGetURITrait } from '../../../entry/traits/get-uri/file.get-uri.trait';
import { IEntryRemoveOptions } from '../../../entry/traits/remove/entry.remove.function-definition';
import {
  createEntityIsNotAFileFileSystemError,
} from '../../../errors/file-system-error/built-in/create-entity-is-not-a-file-file-system-error';
import { parseURI } from '../../../uri/parse-uri';
import { IURI } from '../../../uri/uri.type';
import { IFile } from '../../file.type';
import { IFileReadOptions } from '../../traits/read/file.read.function-definition';
import { IFileReadTrait } from '../../traits/read/file.read.trait';
import { IFileWriteOptions } from '../../traits/write/file.write.function-definition';
import { IFileMetadata } from '../../types/file-metadata.type';

export interface INodeJsFileMetadata extends IFileMetadata {
}

export class NodeJsFile extends Entry<INodeJsFileMetadata> implements IFile<INodeJsFileMetadata> {
  readonly #path: Path;

  constructor(
    uri: string,
  ) {
    super(uri);

    const parsedURI: IURI = parseURI(uri);

    if (parsedURI.scheme !== 'file') {
      throw new Error(`Expected "file:" scheme.`);
    }

    this.#path = new Path(parsedURI.path);
  }

  override getMetadata(
    {
      abortable,
    }: IEntryGetMetadataOptions,
  ): AsyncTask<IEnsureAsyncTaskConstrained<INodeJsFileMetadata>> {
    return AsyncTask.fromFactory((): Promise<Stats> => stat(this.#path.toString()), abortable)
      .successful((stats: Stats): INodeJsFileMetadata => {
        if (!stats.isFile()) {
          throw createEntityIsNotAFileFileSystemError(this.getURI());
        }

        return {
          type: 'file',
          accessTime: (stats.atimeMs === 0) ? undefined : stats.atimeMs,
          modificationTime: (stats.mtimeMs === 0) ? undefined : stats.mtimeMs,
          changeTime: (stats.ctimeMs === 0) ? undefined : stats.ctimeMs,
          birthTime: (stats.birthtimeMs === 0) ? undefined : stats.birthtimeMs,
        };
      });
  }

  read(
    {
      buffer,
      position,
      abortable,
    }: IFileReadOptions,
  ): AsyncTask<Uint8Array> {
    return AsyncTask.fromFactory((): Promise<FileHandle> => open(this.#path.toString(), 'r'), abortable)
      .successful((fileHandle: FileHandle, abortable: Abortable): AsyncTask<Uint8Array> => {

        // INFO: temporary fix for bun
        if (typeof fileHandle === 'number') {
          return AsyncTask.fromFactory(() => {
            return readFile(this.#path.toString(), {
              signal: abortable.toAbortSignal(),
            });
          }, abortable)
            .successful((_buffer: Buffer): Uint8Array => {
              position = position ?? 0;
              buffer.set(_buffer.subarray(position, position + buffer.length));
              return buffer.subarray(0, _buffer.length - position);
            });
        }

        return AsyncTask.fromFactory((): Promise<Stats> => fileHandle.stat(), abortable)
          .successful((stats: Stats): Promise<FileReadResult<Uint8Array>> => {
            if (!stats.isFile()) {
              throw createEntityIsNotAFileFileSystemError(this.getURI());
            }

            return fileHandle.read<Uint8Array>({
              buffer,
              position: (position === void 0)
                ? 0
                : Math.max(0, Math.min(stats.size, (position < 0) ? (stats.size - position) : position)),
            });
          })
          .successful(({ buffer, bytesRead }: FileReadResult<Uint8Array>): Uint8Array => {
            return buffer.length === bytesRead
              ? buffer
              : buffer.subarray(0, bytesRead);
          })
          .finally(() => {
            return fileHandle.close();
          });
      });
  }

  write(
    {
      buffer,
      start,
      truncateMode,
      abortable,
    }: IFileWriteOptions,
  ): AsyncTask<number> {
    return AsyncTask.fromFactory((): Promise<FileHandle> => open(this.#path.toString(), 'r'), abortable)
      .successful((fileHandle: FileHandle, abortable: Abortable): AsyncTask<number> => {

        // INFO: temporary fix for bun
        if (typeof fileHandle === 'number') {
          return AsyncTask.fromFactory(() => {
            return writeFile(this.#path.toString(), buffer, {
              signal: abortable.toAbortSignal(),
            });
          }, abortable)
            .successful((): number => {
              return 0;
            });
        }

        throw 'TODO';
        // return AsyncTask.fromFactory((): Promise<Stats> => fileHandle.stat(), abortable)
        //   .successful((stats: Stats): Promise<FileReadResult<Uint8Array>> => {
        //     if (!stats.isFile()) {
        //       throw createEntityIsNotAFileFileSystemError(this.getURI());
        //     }
        //
        //     return fileHandle.read<Uint8Array>({
        //       buffer,
        //       position: (position === void 0)
        //         ? 0
        //         : Math.max(0, Math.min(stats.size, (position < 0) ? (stats.size - position) : position)),
        //     });
        //   })
        //   .successful(({ buffer, bytesRead }: FileReadResult<Uint8Array>): Uint8Array => {
        //     return buffer.length === bytesRead
        //       ? buffer
        //       : buffer.subarray(0, bytesRead);
        //   })
        //   .finally(() => {
        //     return fileHandle.close();
        //   });
      });
  }

  override remove(
    options: IEntryRemoveOptions,
  ): AsyncTask<void> {
    throw 'TODO';
  }
}

