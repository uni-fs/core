import { IFileSystemListTrait } from './traits/list/file-system.list.trait';
import { IFileSystemReadTrait } from './traits/read/file-system.read.trait';
import { IFileSystemEntryMetadata } from './types/file-system-entry-metadata.type';

export interface IFileSystem<//
  GMetadata extends IFileSystemEntryMetadata
  //
> extends //
  IFileSystemReadTrait,
  IFileSystemListTrait<GMetadata>
//
{
}

export type IGenericFileSystem = IFileSystem<any>;
