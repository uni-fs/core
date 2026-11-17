import { IEntryMetadata } from '../../../entry/types/entry-metadata.type';
import { ICollectionEntry } from '../read/collection.read.function-definition';

export interface ICollectionAsyncIterableFunction<GChildMetadata extends IEntryMetadata> {
  (): AsyncIterator<ICollectionEntry<GChildMetadata>>;
}
