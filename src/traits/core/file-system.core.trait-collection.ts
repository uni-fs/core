import { IFileSystemGetProtocolsConfig } from './get-protocols/file-system.get-protocols.config';
import { IFileSystemGetProtocolsTrait } from './get-protocols/file-system.get-protocols.trait';
import { IFileSystemListConfig } from './list/file-system.list.config';
import { IFileSystemListTrait } from './list/file-system.list.trait';
import { IFileSystemMetadataConfig } from './metadata/file-system.metadata.config';
import { IFileSystemMetadataTrait } from './metadata/file-system.metadata.trait';
import { IFileSystemReadTrait } from './read/file-system.read.trait';
import { IFileSystemRemoveTrait } from './remove/file-system.remove.trait';
import { IFileSystemWriteTrait } from './write/file-system.write.trait';

export interface IFileSystemCoreTraitCollectionConfig extends //
  IFileSystemGetProtocolsConfig,
  IFileSystemListConfig,
  IFileSystemMetadataConfig
//
{
}

export interface IFileSystemCoreTraitCollection<GConfig extends IFileSystemCoreTraitCollectionConfig> extends //
  IFileSystemGetProtocolsTrait<GConfig>,
  IFileSystemListTrait<GConfig>,
  IFileSystemMetadataTrait<GConfig>,
  IFileSystemReadTrait,
  IFileSystemRemoveTrait,
  IFileSystemWriteTrait
//
{
}

export type IGenericFileSystemCoreTraitCollection = IFileSystemCoreTraitCollection<IFileSystemCoreTraitCollectionConfig>;


