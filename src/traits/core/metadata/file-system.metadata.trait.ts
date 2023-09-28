import { IFileSystemMetadataConfig } from './file-system.metadata.config';
import { IFileSystemMetadataFunction } from './file-system.metadata.function-definition';

export interface IFileSystemMetadataTrait<GConfig extends IFileSystemMetadataConfig> {
  metadata: IFileSystemMetadataFunction<GConfig>;
}
