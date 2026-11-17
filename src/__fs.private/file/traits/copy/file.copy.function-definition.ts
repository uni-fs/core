import { AsyncTask, IAbortableOptions } from '@lirx/async-task';
import { IFile } from '../../file.type';

/**
 * Copies the content of a file.
 *  - if entry doesn't exist, throws an ENTITY_DOESNT_EXIST error
 *  - if entry is not a file, throws an ENTITY_IS_NOT_A_FILE error
 * @return an AsyncTask that resolves with the copy bytes
 */
export interface IFileCopyFunction {
  (
    options: IFileCopyOptions,
  ): AsyncTask<Uint8Array>;
}

// minimum copy options that the FS must support
export interface IFileCopyOptions extends IAbortableOptions {
  readonly destination: IFile<any>;
}
