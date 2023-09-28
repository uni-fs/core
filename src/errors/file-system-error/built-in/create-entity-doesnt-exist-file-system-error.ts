import { createFileSystemError } from '../create-file-system-error';
import { IFileSystemError } from '../file-system-error.type';

export function createEntityDoesntExistFileSystemError(
  url: string,
): IFileSystemError {
  return createFileSystemError({
    code: 'ENTITY_DOESNT_EXIST',
    url,
    reason: 'Missing entity',
  });
}
