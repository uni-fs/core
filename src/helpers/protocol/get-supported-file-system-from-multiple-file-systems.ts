import { IDefaultNotificationsUnion, IObservable, throwError } from '@lirx/core';
import { IGenericFileSystemCoreTraitCollection } from '../../traits/core/file-system.core.trait-collection';
import { isProtocolSupported } from './is-protocol-supported';

export interface IGetSupportedFileSystemFromMultipleFileSystemsCallback<GNextValue, GFileSystem extends IGenericFileSystemCoreTraitCollection> {
  (
    fileSystem: GFileSystem,
  ): IObservable<IDefaultNotificationsUnion<GNextValue>>;
}

export function getSupportedFileSystemFromMultipleFileSystems<GNextValue, GFileSystem extends IGenericFileSystemCoreTraitCollection>(
  fileSystems: Iterable<GFileSystem>,
  url: URL,
  callback: IGetSupportedFileSystemFromMultipleFileSystemsCallback<GNextValue, GFileSystem>,
): IObservable<IDefaultNotificationsUnion<GNextValue>> {
  return getSupportedFileSystemFromMultipleFileSystemsIterator<GNextValue, GFileSystem>(
    fileSystems[Symbol.iterator](),
    url,
    callback,
  );
}

export function getSupportedFileSystemFromMultipleFileSystemsIterator<GNextValue, GFileSystem extends IGenericFileSystemCoreTraitCollection>(
  fileSystemsIterator: Iterator<GFileSystem>,
  url: URL,
  callback: IGetSupportedFileSystemFromMultipleFileSystemsCallback<GNextValue, GFileSystem>,
): IObservable<IDefaultNotificationsUnion<GNextValue>> {
  let fileSystemsResult: IteratorResult<GFileSystem>;
  while (!(fileSystemsResult = fileSystemsIterator.next()).done) {
    const fileSystem: GFileSystem = fileSystemsResult.value;
    if (isProtocolSupported(fileSystem.getProtocols(), url)) {
      return callback(fileSystem);
    }
  }

  return throwError(new Error(`Unsupported protocol: '${url.protocol}'`));
}
