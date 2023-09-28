import { IFileSystemCoreTraitCollection, IFileSystemCoreTraitCollectionConfig } from '../core/file-system.core.trait-collection';
import { IFileSystemExtendedFileTraitCollection } from './file/file-system.extended.file.trait-collection';

export interface IFileSystemExtendedTraitCollectionConfig extends IFileSystemCoreTraitCollectionConfig //
//
{
}

export interface IFileSystemExtendedTraitCollection<GConfig extends IFileSystemExtendedTraitCollectionConfig> extends IFileSystemCoreTraitCollection<GConfig>, //
  // IFileSystemExtendedEntryTraitCollection,
  IFileSystemExtendedFileTraitCollection
//
{
}

export type IGenericFileSystemExtendedTraitCollection = IFileSystemExtendedTraitCollection<IFileSystemExtendedTraitCollectionConfig>;


