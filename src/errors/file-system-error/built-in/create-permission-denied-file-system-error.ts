import { createFileSystemError } from '../create-file-system-error';
import { IFileSystemError } from '../file-system-error.type';

export function createPermissionDeniedFileSystemError(
  url: string,
): IFileSystemError {
  return createFileSystemError({
    code: 'PERMISSION_DENIED',
    url,
    reason: 'Permission denied',
  });
}
