import {
  IFileSystemCreateFileFunction, IFileSystemCreateFileFunctionNotifications,
} from '../file-system.create-file.function-definition';
import { fulfilled$$$, IObservable, pipe$$, singleN } from '@lirx/core';
import { IFileSystemWriteFunction } from '../../../../core/write/file-system.write.function-definition';


export function createFileSystemCreateFileUsingWrite(
  write: IFileSystemWriteFunction,
): IFileSystemCreateFileFunction {
  return (
    url: URL,
  ): IObservable<IFileSystemCreateFileFunctionNotifications> => {
    return fileSystemCreateFileUsingWrite(
      write,
      url,
    );
  };
}

export function fileSystemCreateFileUsingWrite(
  write: IFileSystemWriteFunction,
  url: URL,
): IObservable<IFileSystemCreateFileFunctionNotifications> {
  return pipe$$(write(url, new Uint8Array(0), { truncateMode: 'none' }), [
    fulfilled$$$((): IObservable<IFileSystemCreateFileFunctionNotifications> => {
      return singleN(url);
    }),
  ]);
}
