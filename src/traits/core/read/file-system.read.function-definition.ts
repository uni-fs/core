import { IDefaultNotificationsUnion, IObservable } from '@lirx/core';


export type IFileSystemReadFunctionNotifications = IDefaultNotificationsUnion<Uint8Array>;

/**
 * Reads the content of a file.
 *  - if entry doesn't exist, throws an ENTITY_DOESNT_EXIST error
 *  - if entry is not a file, throws an ENTITY_IS_NOT_A_FILE error
 * @param url
 * @param buffer - where to store the data
 * @param options
 * @return an Observable that resolves with the read bytes
 */

export interface IFileSystemReadFunction {
  (
    url: URL,
    buffer: Uint8Array,
    options?: IFileSystemReadOptions,
  ): IObservable<IFileSystemReadFunctionNotifications>;
}

// minimum read options that the FS must support
export interface IFileSystemReadOptions {
  start?: number; // (default: 0)
  end?: number; // (default: end of file)
}
