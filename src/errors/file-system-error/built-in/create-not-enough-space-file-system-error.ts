import { createFileSystemError } from '../create-file-system-error';
import { IFileSystemError } from '../file-system-error.type';

export function createNotEnoughSpaceFileSystemError(
  url: string,
): IFileSystemError {
  return createFileSystemError({
    code: 'NOT_ENOUGH_SPACE',
    url,
    reason: 'Not enough space',
  });
}
