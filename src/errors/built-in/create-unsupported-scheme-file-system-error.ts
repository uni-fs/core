import { createFileSystemError } from '../create-file-system-error';
import { IFileSystemError } from '../file-system-error.type';

export function createUnsupportedSchemeFileSystemError(
  uri: string,
  supported: readonly string[],
): IFileSystemError {
  return createFileSystemError({
    code: 'UNSUPPORTED_SCHEME',
    uri,
    reason: `Unsupported scheme, expected: ${supported.join(', ')}`,
  });
}
