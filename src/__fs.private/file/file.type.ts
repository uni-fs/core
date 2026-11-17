import { IEntry } from '../entry/entry.type';
import { IFileReadTrait } from './traits/read/file.read.trait';
import { IFileWriteTrait } from './traits/write/file.write.trait';
import { IFileMetadata } from './types/file-metadata.type';

export interface IFile<GMetadata extends IFileMetadata> extends IEntry<GMetadata>, //
  IFileReadTrait,
  IFileWriteTrait
//
{
}

export type IGenericFile = IFile<any>;
