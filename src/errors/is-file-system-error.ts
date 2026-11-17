import { isCustomError } from '@lirx/utils';
import { FILE_SYSTEM_ERROR_NAME, IFileSystemErrorName } from './file-system-error-name.constant';
import { IFileSystemError, IFileSystemErrorProperties } from './file-system-error.type';

export function isFileSystemError(
  value: unknown,
): value is IFileSystemError {
  return isCustomError<IFileSystemErrorName, IFileSystemErrorProperties>(
    value,
    FILE_SYSTEM_ERROR_NAME,
  );
}

