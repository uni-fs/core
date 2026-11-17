import { createFileSystemError } from '../create-file-system-error';
import { IFileSystemError } from '../file-system-error.type';

export function createBusyFileSystemError(
  uri: string,
): IFileSystemError {
  return createFileSystemError({
    code: 'BUSY',
    uri,
    reason: 'Busy',
  });
}
