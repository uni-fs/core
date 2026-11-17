import { createFileSystemError } from '../create-file-system-error';
import { IFileSystemError } from '../file-system-error.type';

export function createEntityDoesntExistFileSystemError(
  uri: string,
): IFileSystemError {
  return createFileSystemError({
    code: 'ENTITY_DOESNT_EXIST',
    uri,
    reason: 'Missing entity',
  });
}
