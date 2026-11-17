import { IEntryMetadata } from '../../../entry/types/entry-metadata.type';
import { ICollectionReadFunction } from './collection.read.function-definition';

export interface ICollectionReadTrait<GChildMetadata extends IEntryMetadata> {
  readonly read: ICollectionReadFunction<GChildMetadata>;
}
