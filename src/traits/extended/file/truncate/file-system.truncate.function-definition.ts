import { IDefaultNotificationsUnion, IObservable } from '@lirx/core';

export type IFileSystemTruncateFunctionNotifications = IDefaultNotificationsUnion<number>;

/**
 * Truncates a file
 *  - if entry doesn't exist, throws an ENTITY_DOESNT_EXIST error
 *  - if entry is not a file, throws an ENTITY_IS_NOT_A_FILE error
 *  @return an Observable revolved with the file's size
 */

export interface IFileSystemTruncateFunction {
  (
    url: URL,
    size: number,
  ): IObservable<IFileSystemTruncateFunctionNotifications>;
}

