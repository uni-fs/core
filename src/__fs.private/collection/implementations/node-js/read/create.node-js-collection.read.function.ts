import { Path } from '@lifaon/path';
import { Abortable, AsyncTask, IAsyncTaskInput } from '@lirx/async-task';
import { Dir, Dirent } from 'node:fs';
import { opendir } from 'node:fs/promises';
import { IEntryGetURITrait } from '../../../../entry/traits/get-uri/file.get-uri.trait';
import { createAfterNoFoundFileSystemError } from '../../../../errors/file-system-error/built-in/create-after-no-found-file-system-error';
import { parseURI } from '../../../../uri/parse-uri';
import { serializeURI } from '../../../../uri/serialize-uri';
import { ICollectionEntries, ICollectionReadOptions } from '../../../traits/read/collection.read.function-definition';

export function nodeJsCollectionReadFunction(
  this: IEntryGetURITrait,
  {
    first = Number.POSITIVE_INFINITY,
    after,
    abortable,
  }: ICollectionReadOptions,
): AsyncTask<ICollectionEntries> {
  // TODO wrap in async task
  const parsedURI = parseURI(this.getURI());
  const path = new Path(parsedURI.path);

  return AsyncTask.fromFactory(() => opendir(path.toString()), abortable)
    .successful((dir: Dir, abortable: Abortable): AsyncTask<ICollectionEntries> => {
      const loop = (
        entries: ICollectionEntries,
        afterFound: boolean,
        abortable: Abortable,
      ): AsyncTask<ICollectionEntries> => {
        if (entries.length >= first) {
          return AsyncTask.success(entries, abortable);
        } else {
          return AsyncTask.fromFactory((): Promise<Dirent | null> => dir.read(), abortable)
            .successful((
              dirent: Dirent | null,
              abortable: Abortable,
            ): IAsyncTaskInput<ICollectionEntries> => {
              if (dirent === null) {
                if (afterFound) {
                  return entries;
                } else {
                  throw createAfterNoFoundFileSystemError(
                    this.getURI(),
                    after!,
                  );
                }
              } else {
                const entryPath = dirent.path
                  ? new Path(dirent.path)
                  : path.concat(dirent.name);

                const uri: string = serializeURI({
                  ...parsedURI,
                  path: entryPath.resolve().toString(),
                });

                if (afterFound) {
                  return loop(
                    [
                      ...entries,
                      {
                        uri,
                        type: dirent.isFile() ? 'file' : 'collection',
                      },
                    ],
                    true,
                    abortable,
                  );
                } else {
                  return loop(
                    entries,
                    (uri === after),
                    abortable,
                  );
                }
              }
            });
        }
      };

      return loop(
        [],
        after === void 0,
        abortable,
      )
        .finally((): Promise<void> => {
          return dir.close();
        });
    });
}
