import { createCustomError } from '@lirx/utils';
import { FILE_SYSTEM_ERROR_NAME, IFileSystemErrorName } from './file-system-error-name.constant';
import { IFileSystemError, IFileSystemErrorOptions, IFileSystemErrorProperties } from './file-system-error.type';

export function createFileSystemError(
  {
    reason,
    ...options
  }: IFileSystemErrorOptions,
): IFileSystemError {
  return createCustomError<IFileSystemErrorName, IFileSystemErrorProperties>({
    name: FILE_SYSTEM_ERROR_NAME,
    message: `[${options.code}] - for uri ${JSON.stringify(options.uri)}${(reason ? `: ${reason}` : '')}`,
    ...options,
  });
}


