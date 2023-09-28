import { IFileSystemError, IFileSystemErrorOptions, IFileSystemErrorProperties } from './file-system-error.type';
import { FILE_SYSTEM_ERROR_NAME, IFileSystemErrorName } from './file-system-error-name.constant';
import { createCustomError } from '@lirx/core';

export function createFileSystemError(
  {
    reason,
    ...options
  }: IFileSystemErrorOptions,
): IFileSystemError {
  return createCustomError<IFileSystemErrorName, IFileSystemErrorProperties>({
    name: FILE_SYSTEM_ERROR_NAME,
    message: `[${ options.code }] - for url '${ options.url }'${ (reason ? `: ${ reason }` : '') }`,
    ...options,
  });
}


