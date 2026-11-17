import { AsyncTask, IAbortableOptions } from '@lirx/async-task';
import { IEntryMetadata } from '../../../entry/types/entry-metadata.type';

/**
 * Reads the content of a collection.
 *  - if entry doesn't exist, throws an ENTITY_DOESNT_EXIST error
 *  - if entry is not a collection, throws an ENTITY_IS_NOT_A_COLLECTION error
 *  - if after doesn't exist in this collection, throws an
 * @return an AsyncTask revolved with the list of ui and metadata for this collection
 */
export interface ICollectionReadFunction<GChildMetadata extends IEntryMetadata> {
  (
    options: ICollectionReadOptions,
  ): AsyncTask<ICollectionEntries<GChildMetadata>>;
}

// minimum read options that the FS must support
export interface ICollectionReadOptions extends IAbortableOptions {
  readonly first?: number;
  readonly after?: string; // uri
}

export type ICollectionEntry<GChildMetadata extends IEntryMetadata = IEntryMetadata> = GChildMetadata & {
  readonly uri: string;
}

export type ICollectionEntries<GChildMetadata extends IEntryMetadata = IEntryMetadata> = readonly ICollectionEntry<GChildMetadata>[];
