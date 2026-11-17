import { AsyncTask, IAbortableOptions, IEnsureAsyncTaskConstrained } from '@lirx/async-task';
import { IEntryMetadata } from '../../types/entry-metadata.type';

/**
 * Returns the metadata of an entry.
 */
export interface IEntryGetMetadataFunction<GMetadata extends IEntryMetadata> {
  (
    options: IEntryGetMetadataOptions,
  ): AsyncTask<IEnsureAsyncTaskConstrained<GMetadata>>;
}

// minimum options that the FS must support
export interface IEntryGetMetadataOptions extends IAbortableOptions {
}
