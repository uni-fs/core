import { IFileSystemReadFunction } from './file-system.read.function-definition';

export interface IFileSystemReadTrait {
  readonly read: IFileSystemReadFunction;
}
