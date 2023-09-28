import { createFileSystemError } from '../create-file-system-error';
import { IFileSystemError } from '../file-system-error.type';

export function createEntityIsNotAFileFileSystemError(
  url: string,
): IFileSystemError {
  return createFileSystemError({
    code: 'ENTITY_IS_NOT_A_FILE',
    url,
    reason: 'Not a file',
  });
}
