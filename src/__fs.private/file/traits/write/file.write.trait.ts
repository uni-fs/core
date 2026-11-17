import { IFileWriteFunction } from './file.write.function-definition';

export interface IFileWriteTrait {
  readonly write: IFileWriteFunction;
}
