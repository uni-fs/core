import { AsyncTask, IAbortableOptions } from '@lirx/async-task';

/**
 * Reads the content of a file.
 *  - if entry doesn't exist, throws an ENTITY_DOESNT_EXIST error
 *  - if entry is not a file, throws an ENTITY_IS_NOT_A_FILE error
 * @return an AsyncTask that resolves with the read bytes
 */

export interface IFileReadFunction {
  (
    options: IFileReadOptions,
  ): AsyncTask<Uint8Array>;
}

// minimum read options that the FS must support
export interface IFileReadOptions extends IAbortableOptions {
  readonly buffer: Uint8Array; // where to store the data
  readonly position?: number; // (default: 0)
  // readonly end?: number; // (default: end of file)
}
