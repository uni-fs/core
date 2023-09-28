import { createFileSystemError } from '../create-file-system-error';
import { IFileSystemError } from '../file-system-error.type';

export function createNotEmptyFileSystemError(
  url: string,
): IFileSystemError {
  return createFileSystemError({
    code: 'NOT_EMPTY',
    url,
    reason: 'Not empty',
  });
}
