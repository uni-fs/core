import { createFileSystemError } from '../create-file-system-error';
import { IFileSystemError } from '../file-system-error.type';

export function createPermissionDeniedFileSystemError(
  uri: string,
): IFileSystemError {
  return createFileSystemError({
    code: 'PERMISSION_DENIED',
    uri,
    reason: 'Permission denied',
  });
}
