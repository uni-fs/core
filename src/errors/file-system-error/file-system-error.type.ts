import { ICustomError, ICustomErrorMessageOptionalOptions } from '@lirx/core';
import { IFileSystemErrorName } from './file-system-error-name.constant';

export interface IFileSystemErrorOptions extends ICustomErrorMessageOptionalOptions {
  url: string;
  code: string;
  reason?: string;
}

export interface IFileSystemErrorProperties {
  readonly url: string;
  readonly code: string;
}

export type IFileSystemError = ICustomError<IFileSystemErrorName, IFileSystemErrorProperties>;

