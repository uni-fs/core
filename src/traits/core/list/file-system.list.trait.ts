import { IFileSystemListConfig } from './file-system.list.config';
import { IFileSystemListFunction } from './file-system.list.function-definition';

export interface IFileSystemListTrait<GConfig extends IFileSystemListConfig> {
  list: IFileSystemListFunction<GConfig>;
}
