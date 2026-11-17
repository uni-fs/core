import { createFileSystemError } from '../create-file-system-error';
import { IFileSystemError } from '../file-system-error.type';

export function createNotEmptyFileSystemError(
  uri: string,
): IFileSystemError {
  return createFileSystemError({
    code: 'NOT_EMPTY',
    uri,
    reason: 'Not empty',
  });
}
