import { IDefaultNotificationsUnion, IObservable } from '@lirx/core';

export type IFileSystemSizeFunctionNotifications = IDefaultNotificationsUnion<number>;

/**
 * Returns the size of a file
 *  - if entry doesn't exist, throws an ENTITY_DOESNT_EXIST error
 *  - if entry is not a file, throws an ENTITY_IS_NOT_A_FILE error
 *  @return an Observable revolved with the entry's size
 */

export interface IFileSystemSizeFunction {
  (
    url: URL,
  ): IObservable<IFileSystemSizeFunctionNotifications>;
}

