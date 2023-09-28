import { IFileSystemTruncateMode } from '../../shared/file-system.truncate-mode.type';
import { IDefaultNotificationsUnion, IObservable } from '@lirx/core';

export type IFileSystemWriteFunctionNotifications = IDefaultNotificationsUnion<number>;

/**
 * Writes some data into a file
 *  - if entry doesn't exist, creates the entry
 *  - if entry is not a file, throws an ENTITY_IS_NOT_A_FILE error
 * @return an Observable that resolves with the position of the cursor after writing
 */

export interface IFileSystemWriteFunction {
  (
    url: URL,
    buffer: Uint8Array,
    options?: IFileSystemWriteOptions,
  ): IObservable<IFileSystemWriteFunctionNotifications>;
}

// minimum write options that the FS must support
export interface IFileSystemWriteOptions {
  start?: number; // (default: undefined => end of file) defines the position where to start writing: if undefined => fileSize, if negative => fileSize + position
  truncateMode?: IFileSystemTruncateMode; // (default: 'clear') defines some operations on the file after or before writing
}
