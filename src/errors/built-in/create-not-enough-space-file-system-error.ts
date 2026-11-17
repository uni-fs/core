import { createFileSystemError } from '../create-file-system-error';
import { IFileSystemError } from '../file-system-error.type';

export function createNotEnoughSpaceFileSystemError(
  uri: string,
): IFileSystemError {
  return createFileSystemError({
    code: 'NOT_ENOUGH_SPACE',
    uri,
    reason: 'Not enough space',
  });
}
