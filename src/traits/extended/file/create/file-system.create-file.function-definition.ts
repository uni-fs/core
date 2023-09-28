import { IDefaultNotificationsUnion, IObservable } from '@lirx/core';

export type IFileSystemCreateFileFunctionNotifications = IDefaultNotificationsUnion<URL>;

/**
 * Creates an empty file
 *  - if entry doesn't exist, throws an ENTITY_DOESNT_EXIST error
 *  - if entry is not a file, throws an ENTITY_IS_NOT_A_FILE error
 */

export interface IFileSystemCreateFileFunction {
  (
    url: URL,
  ): IObservable<IFileSystemCreateFileFunctionNotifications>;
}

