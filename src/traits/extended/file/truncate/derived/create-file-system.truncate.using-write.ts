import {
  IFileSystemTruncateFunction, IFileSystemTruncateFunctionNotifications,
} from '../file-system.truncate.function-definition';
import { IObservable } from '@lirx/core';
import { IFileSystemWriteFunction } from '../../../../core/write/file-system.write.function-definition';


export function createFileSystemTruncateUsingWrite(
  write: IFileSystemWriteFunction,
): IFileSystemTruncateFunction {
  return (
    url: URL,
    size: number,
  ): IObservable<IFileSystemTruncateFunctionNotifications> => {
    return fileSystemTruncateUsingWrite(
      write,
      url,
      size,
    );
  };
}

export function fileSystemTruncateUsingWrite(
  write: IFileSystemWriteFunction,
  url: URL,
  size: number,
): IObservable<IFileSystemTruncateFunctionNotifications> {
  return write(url, new Uint8Array(0), { start: size, truncateMode: 'truncate' });
}
