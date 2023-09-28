import { IDefaultNotificationsUnion, IObservable } from '@lirx/core';
import { IFileSystemMetadataConfig } from './file-system.metadata.config';

export type IFileSystemMetadataFunctionNotifications<GConfig extends IFileSystemMetadataConfig> = IDefaultNotificationsUnion<GConfig['metadata']>;

/**
 * Returns some information about an entry
 *  - if entry doesn't exist, throws an ENTITY_DOESNT_EXIST error
 * @return stats - an Observable resolved with the stats of the entry
 */
export interface IFileSystemMetadataFunction<GConfig extends IFileSystemMetadataConfig> {
  (
    url: URL,
  ): IObservable<IFileSystemMetadataFunctionNotifications<GConfig>>;
}

