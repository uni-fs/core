import { Path } from '@lifaon/path';
import { AsyncTask, IEnsureAsyncTaskConstrained } from '@lirx/async-task';
import { Stats } from 'node:fs';
import { stat } from 'node:fs/promises';
import { mixin } from '../../../__mixin/mixin';

import { Entry } from '../../../entry/implementations/entry.abstract-class';
import { IEntryGetMetadataOptions } from '../../../entry/traits/get-metadata/file.get-metadata.function-definition';
import { IEntryRemoveOptions } from '../../../entry/traits/remove/entry.remove.function-definition';
import {
  createEntityIsNotACollectionFileSystemError,
} from '../../../errors/file-system-error/built-in/create-entity-is-not-a-collection-file-system-error';
import { parseURI } from '../../../uri/parse-uri';
import { IURI } from '../../../uri/uri.type';
import { ICollection } from '../../collection.type';
import { ICollectionMetadata } from '../../types/collection-metadata.type';
import { nodeJsCollectionReadFunction } from './read/create.node-js-collection.read.function';

export interface INodeJsCollectionMetadata extends ICollectionMetadata {
}

export class NodeJsCollection extends mixin({
  read: nodeJsCollectionReadFunction,
}, Entry<INodeJsCollectionMetadata>) implements ICollection<INodeJsCollectionMetadata> {
  readonly #parsedURI: IURI;
  readonly #path: Path;

  constructor(
    uri: string,
  ) {
    super(uri);

    this.#parsedURI = parseURI(uri);

    if (this.#parsedURI.scheme !== 'file') {
      throw new Error(`Expected "file:" scheme.`);
    }

    this.#path = new Path(this.#parsedURI.path);
  }

  override getMetadata(
    {
      abortable,
    }: IEntryGetMetadataOptions,
  ): AsyncTask<IEnsureAsyncTaskConstrained<INodeJsCollectionMetadata>> {
    return AsyncTask.fromFactory((): Promise<Stats> => stat(this.#path.toString()), abortable)
      .successful((stats: Stats): INodeJsCollectionMetadata => {
        if (!stats.isDirectory()) {
          throw createEntityIsNotACollectionFileSystemError(this.getURI());
        }

        return {
          type: 'collection',
        };
      });
  }

  // read(
  //   {
  //     first = Number.POSITIVE_INFINITY,
  //     after,
  //     abortable,
  //   }: ICollectionReadOptions,
  // ): AsyncTask<ICollectionEntries> {
  //   return AsyncTask.fromFactory(() => opendir(this.#path.toString()), abortable)
  //     .successful((dir: Dir, abortable: Abortable): AsyncTask<ICollectionEntries> => {
  //       const loop = (
  //         entries: ICollectionEntries,
  //         afterFound: boolean,
  //         abortable: Abortable,
  //       ): AsyncTask<ICollectionEntries> => {
  //         if (entries.length >= first) {
  //           return AsyncTask.success(entries, abortable);
  //         } else {
  //           return AsyncTask.fromFactory((): Promise<Dirent | null> => dir.read(), abortable)
  //             .successful((
  //               dirent: Dirent | null,
  //               abortable: Abortable,
  //             ): IAsyncTaskInput<ICollectionEntries> => {
  //               if (dirent === null) {
  //                 if (afterFound) {
  //                   return entries;
  //                 } else {
  //                   throw createAfterNoFoundFileSystemError(
  //                     this.getURI(),
  //                     after!,
  //                   );
  //                 }
  //               } else {
  //                 const path = dirent.path
  //                   ? new Path(dirent.path)
  //                   : this.#path.concat(dirent.name);
  //
  //                 const uri: string = serializeURI({
  //                   ...this.#parsedURI,
  //                   path: path.resolve().toString(),
  //                 });
  //
  //                 if (afterFound) {
  //                   return loop(
  //                     [
  //                       ...entries,
  //                       {
  //                         uri,
  //                         type: dirent.isFile() ? 'file' : 'collection',
  //                       },
  //                     ],
  //                     true,
  //                     abortable,
  //                   );
  //                 } else {
  //                   return loop(
  //                     entries,
  //                     (uri === after),
  //                     abortable,
  //                   );
  //                 }
  //               }
  //             });
  //         }
  //       };
  //
  //       return loop(
  //         [],
  //         after === void 0,
  //         abortable,
  //       )
  //         .finally((): Promise<void> => {
  //           return dir.close();
  //         });
  //     });
  // }

  override remove(
    options: IEntryRemoveOptions,
  ): AsyncTask<void> {
    throw 'TODO';
  }
}

