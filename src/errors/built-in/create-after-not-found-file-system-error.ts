import { createFileSystemError } from '../create-file-system-error';
import { IFileSystemError } from '../file-system-error.type';

export function createAfterNotFoundFileSystemError(
  uri: string,
  after: string,
): IFileSystemError {
  return createFileSystemError({
    code: 'AFTER_NOT_FOUND',
    uri,
    reason: `After not found - ${JSON.stringify(after)}`,
  });
}
