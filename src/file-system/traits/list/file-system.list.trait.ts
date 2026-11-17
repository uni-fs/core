import { IFileSystemEntryMetadata } from '../../types/file-system-entry-metadata.type';
import { IFileSystemListFunction } from './file-system.list.function-definition';

export interface IFileSystemListTrait<GMetadata extends IFileSystemEntryMetadata> {
  readonly list: IFileSystemListFunction<GMetadata>;
}
