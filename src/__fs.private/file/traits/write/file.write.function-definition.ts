import { AsyncTask, IAbortableOptions } from '@lirx/async-task';
import { IFileTruncateMode } from '../../../entry/types/file-truncate-mode.type';

/**
 * Writes some data into a file
 *  - if entry doesn't exist, creates the entry
 *  - if entry is not a file, throws an ENTITY_IS_NOT_A_FILE error
 * @return an AsyncTask that resolves with the position of the cursor after writing
 */
export interface IFileWriteFunction {
  (
    options: IFileWriteOptions,
  ): AsyncTask<number>;
}

// minimum write options that the FS must support
export interface IFileWriteOptions extends IAbortableOptions {
  readonly buffer: Uint8Array;
  readonly start?: number; // (default: undefined => end of file) defines the position where to start writing: if undefined => fileSize, if negative => fileSize + position
  readonly truncateMode?: IFileTruncateMode; // (default: 'clear') defines some operations on the file after or before writing
}
