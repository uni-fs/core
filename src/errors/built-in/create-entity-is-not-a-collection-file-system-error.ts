import { createFileSystemError } from '../create-file-system-error';
import { IFileSystemError } from '../file-system-error.type';

export function createEntityIsNotACollectionFileSystemError(
  uri: string,
): IFileSystemError {
  return createFileSystemError({
    code: 'ENTITY_IS_NOT_A_COLLECTION',
    uri,
    reason: 'Not a collection',
  });
}
