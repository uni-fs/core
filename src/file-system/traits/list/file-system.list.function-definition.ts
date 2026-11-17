import { AsyncTask, IAbortableOptions } from '@lirx/async-task';
import { IFileSystemEntryMetadata } from '../../types/file-system-entry-metadata.type';

/**
 * Lists the content of a collection.
 *  - if entry doesn't exist, throws an ENTITY_DOESNT_EXIST error
 *  - if entry is not a collection, throws an ENTITY_IS_NOT_A_COLLECTION error
 *  - ~~if after doesn't exist in this collection, throws an AFTER_NOT_FOUND error~~
 * @return an AsyncTask revolved with the list of uri and metadata for this collection
 */
export interface IFileSystemListFunction<GMetadata extends IFileSystemEntryMetadata> {
  (
    options: IFileSystemListOptions,
  ): AsyncTask<IFileSystemListEntries<GMetadata>>;
}

export interface IFileSystemListOptions extends IAbortableOptions {
  readonly uri: string; // the uri may include some query
  // readonly query?: string;
  // readonly first?: number;
  // readonly after?: string; // uri
}

export type IFileSystemListEntry<GMetadata extends IFileSystemEntryMetadata> = GMetadata & {
  readonly uri: string;
}

export type IFileSystemListEntries<GMetadata extends IFileSystemEntryMetadata> = readonly IFileSystemListEntry<GMetadata>[];

