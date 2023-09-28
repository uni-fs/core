import { IDefaultNotificationsUnion, IObservable } from '@lirx/core';
import { IFileSystemEntryWithMetadata } from './file-system-entry-with-metadata.type';
import { IFileSystemListConfig } from './file-system.list.config';

export type IFileSystemListFunctionNotifications<GConfig extends IFileSystemListConfig> = IDefaultNotificationsUnion<IFileSystemEntryWithMetadata<GConfig['metadata']>>;

/**
 * Returns a list of entries
 *  - if entry doesn't exist, throws an ENTITY_DOESNT_EXIST error
 *  - if entry is not a directory, throws an ENTITY_IS_NOT_A_DIRECTORY error
 * @return an Observable revolved with the list of list (as URLs)
 */
export interface IFileSystemListFunction<GConfig extends IFileSystemListConfig> {
  (
    url: URL,
    options?: IFileSystemListFunctionOptions,
  ): IObservable<IFileSystemListFunctionNotifications<GConfig>>;
}


export interface IFileSystemListFunctionOptions {
  withMetadata?: boolean; // (default: false)
  search?: string;
  // inParents?: readonly URL[]; // (default: [])
}
