import { createFileSystemError } from '../create-file-system-error';
import { IFileSystemError } from '../file-system-error.type';

export function createEntityIsNotADirectoryFileSystemError(
  url: string,
): IFileSystemError {
  return createFileSystemError({
    code: 'ENTITY_IS_NOT_A_DIRECTORY',
    url,
    reason: 'Not a directory',
  });
}
