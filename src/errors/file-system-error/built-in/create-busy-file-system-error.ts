import { createFileSystemError } from '../create-file-system-error';
import { IFileSystemError } from '../file-system-error.type';

export function createBusyFileSystemError(
  url: string,
): IFileSystemError {
  return createFileSystemError({
    code: 'BUSY',
    url,
    reason: 'Busy',
  });
}
