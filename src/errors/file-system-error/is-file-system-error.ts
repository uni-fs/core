import { FILE_SYSTEM_ERROR_NAME, IFileSystemErrorName } from './file-system-error-name.constant';
import { IFileSystemError, IFileSystemErrorProperties } from './file-system-error.type';
import { isCustomError } from '@lirx/core';


export function isFileSystemError(
  value: unknown,
): value is IFileSystemError {
  return isCustomError<IFileSystemErrorName, IFileSystemErrorProperties>(
    value,
    FILE_SYSTEM_ERROR_NAME,
  );
}

