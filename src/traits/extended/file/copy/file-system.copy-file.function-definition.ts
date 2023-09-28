import { IDefaultNotificationsUnion, IObservable } from '@lirx/core';
import { IGenericFileSystemCoreTraitCollection } from '../../../core/file-system.core.trait-collection';

export type IFileSystemCopyFileFunctionNotifications = IDefaultNotificationsUnion<URL>;

/**
 * Copies a file
 *  - if entry doesn't exist, throws an ENTITY_DOESNT_EXIST error
 *  - if entry is not a file, throws an ENTITY_IS_NOT_A_FILE error
 *  @return an Observable revolved with the destination's URL
 */

export interface IFileSystemCopyFileFunction {
  (
    sourceURL: URL,
    destinationURL: URL,
    destinationFS?: IGenericFileSystemCoreTraitCollection,
  ): IObservable<IFileSystemCopyFileFunctionNotifications>;
}

