import { IFile } from './file.type';
import { IFileCopyTrait } from './traits/copy/file.copy.trait';
import { IFileMetadata } from './types/file-metadata.type';

export interface IFileExtended<GMetadata extends IFileMetadata> extends IFile<GMetadata>, //
  IFileCopyTrait
//
{
}

