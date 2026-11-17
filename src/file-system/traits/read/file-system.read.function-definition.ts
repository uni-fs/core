import { AsyncTask, IAbortableOptions } from '@lirx/async-task';

/**
 * Reads the content of a file.
 *  - if entry doesn't exist, throws an ENTITY_DOESNT_EXIST error
 *  - if entry is not a file, throws an ENTITY_IS_NOT_A_FILE error
 * @return an AsyncTask that resolves with the read bytes
 */
export interface IFileSystemReadFunction {
  (
    options: IFileSystemReadOptions,
  ): AsyncTask<Uint8Array>;
}

export interface IFileSystemReadOptions extends IAbortableOptions {
  readonly uri: string;
  readonly buffer: Uint8Array; // where to store the data
  readonly position?: number; // (default: 0)
}
