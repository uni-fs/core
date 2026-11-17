import { Abortable } from '@lirx/async-task';
import { IEntryMetadata } from '../../../../entry/types/entry-metadata.type';
import { ICollectionEntries, ICollectionEntry, ICollectionReadFunction } from '../../../traits/read/collection.read.function-definition';
import { ICollectionAsyncIterableFunction } from '../../../traits/async-iterable/collection.async-iterable.function-definition';

export function createCollectionAsyncIterableFunctionFromRead<GChildMetadata extends IEntryMetadata>(
  read: ICollectionReadFunction<GChildMetadata>,
  first: number = 10,
): ICollectionAsyncIterableFunction<GChildMetadata> {
  return async function *(): AsyncIterator<ICollectionEntry<GChildMetadata>> {
    let after: string | undefined;

    while (true) {
      const entries: ICollectionEntries<GChildMetadata> = await read({
        abortable: Abortable.never,
        after,
        first,
      }).toPromise();

      if (entries.length > 0) {
        after = entries[entries.length - 1].uri;
      }

      yield * entries;

      if (entries.length < first) {
        break;
      }
    }
  };
}
