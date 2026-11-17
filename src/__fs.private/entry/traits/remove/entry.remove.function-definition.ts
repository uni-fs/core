import { AsyncTask, IAbortableOptions } from '@lirx/async-task';

/**
 * Removes an entry from the entrysystem
 *  - if entry doesn't exist, resolves
 *  - ~~if entry is a collection and is not empty, throws a NOT_EMPTY error~~
 *  - if entry is a collection, removes it.
 * @return an AsyncTask
 */
export interface IEntryRemoveFunction {
  (
    options: IEntryRemoveOptions,
  ): AsyncTask<void>;
}

// minimum remove options that the FS must support
export interface IEntryRemoveOptions extends IAbortableOptions {
}
