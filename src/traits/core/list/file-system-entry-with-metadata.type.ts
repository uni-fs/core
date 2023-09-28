import { IFileSystemMetadata } from '../metadata/file-system-metadata.type';

export interface IFileSystemEntryWithMetadata<GMetadata extends IFileSystemMetadata> {
  url: URL;
  metadata: GMetadata | null;
}
