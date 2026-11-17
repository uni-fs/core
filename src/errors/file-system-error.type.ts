import { ICustomError, ICustomErrorMessageOptionalOptions } from '@lirx/utils';
import { IFileSystemErrorName } from './file-system-error-name.constant';

export interface IFileSystemErrorProperties {
  readonly uri: string;
  readonly code: string;
}

export interface IFileSystemErrorOptions extends IFileSystemErrorProperties, ICustomErrorMessageOptionalOptions {
  readonly reason?: string;
}

export type IFileSystemError = ICustomError<IFileSystemErrorName, IFileSystemErrorProperties>;

