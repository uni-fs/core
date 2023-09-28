import { IDefaultNotificationsUnion, IObservable } from '@lirx/core';

export type IFileSystemRemoveFunctionNotifications = IDefaultNotificationsUnion<URL>;

/**
 * Removes an entry from the filesystem
 *  - if entry doesn't exist, resolves
 *  - if entry is a directory and is not empty, throws a NOT_EMPTY error
 * @return an Observable revolved with the remove entry's URL
 */

export interface IFileSystemRemoveFunction {
  (
    url: URL,
  ): IObservable<IFileSystemRemoveFunctionNotifications>;
}



