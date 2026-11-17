import { AsyncTask, IEnsureAsyncTaskConstrained } from '@lirx/async-task';
import { IEntry } from '../entry.type';
import { IEntryGetMetadataOptions } from '../traits/get-metadata/file.get-metadata.function-definition';
import { IEntryRemoveOptions } from '../traits/remove/entry.remove.function-definition';
import { IEntryMetadata } from '../types/entry-metadata.type';

export abstract class Entry<GMetadata extends IEntryMetadata> implements IEntry<GMetadata> {
  readonly #uri: string;

  constructor(
    uri: string,
  ) {
    this.#uri = uri;
  }

  getURI(): string {
    return this.#uri;
  }

  abstract getMetadata(
    options: IEntryGetMetadataOptions,
  ): AsyncTask<IEnsureAsyncTaskConstrained<GMetadata>>;

  abstract remove(
    options: IEntryRemoveOptions,
  ): AsyncTask<void>;
}

