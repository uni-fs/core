import { fulfilled$$$, IObservable, pipe$$, singleN } from '@lirx/core';
import { getOptimalBufferSize } from '../../../../../helpers/get-optimal-buffer-size';
import { IFileSystemSizeFunction, IFileSystemSizeFunctionNotifications } from '../file-system.size.function-definition';
import { IFileSystemReadFunction } from '../../../../core/read/file-system.read.function-definition';


export function createFileSystemSizeUsingRead(
  read: IFileSystemReadFunction,
): IFileSystemSizeFunction {
  return (
    url: URL,
  ): IObservable<IFileSystemSizeFunctionNotifications> => {
    return fileSystemSizeUsingRead(
      read,
      url,
    );
  };
}

export function fileSystemSizeUsingRead(
  read: IFileSystemReadFunction,
  url: URL,
): IObservable<IFileSystemSizeFunctionNotifications> {
  // TODO improve
  return pipe$$(read(url, new Uint8Array(getOptimalBufferSize())), [
    fulfilled$$$((buffer: Uint8Array): IObservable<IFileSystemSizeFunctionNotifications> => {
      return singleN(buffer.length);
    }),
  ]);
}

