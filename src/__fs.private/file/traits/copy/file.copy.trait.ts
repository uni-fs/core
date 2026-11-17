import { IFileCopyFunction } from './file.copy.function-definition';

export interface IFileCopyTrait {
  readonly copy: IFileCopyFunction;
}
