import { IFileSystemCopyFileTraitCollection } from './copy/file-system.copy-file.trait';
import { IFileSystemSizeTraitCollection } from './size/file-system.size.trait';
import { IFileSystemTruncateTraitCollection } from './truncate/file-system.truncate.trait';
import { IFileSystemCreateFileTraitCollection } from './create/file-system.create-file.trait';

export interface IFileSystemExtendedFileTraitCollection extends //
  // IFileSystemCopyFileTraitCollection,
  IFileSystemCreateFileTraitCollection,
  IFileSystemSizeTraitCollection,
  IFileSystemTruncateTraitCollection
//
{
}

