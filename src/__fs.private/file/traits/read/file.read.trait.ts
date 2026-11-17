import { IFileReadFunction } from './file.read.function-definition';

export interface IFileReadTrait {
  readonly read: IFileReadFunction;
}
