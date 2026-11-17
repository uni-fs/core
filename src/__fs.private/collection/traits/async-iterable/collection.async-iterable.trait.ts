import { IEntryMetadata } from '../../../entry/types/entry-metadata.type';
import { ICollectionAsyncIterableFunction } from './collection.async-iterable.function-definition';

export interface ICollectionAsyncIterableTrait<GChildMetadata extends IEntryMetadata> {
  readonly [Symbol.asyncIterator]: ICollectionAsyncIterableFunction<GChildMetadata>;
}
