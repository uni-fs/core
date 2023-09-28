import { Path } from '@lifaon/path';

/**
 * Converts a URL to a Path
 */
export function urlToPath(
  url: URL,
): Path {
  return new Path(
    (/^\/(?:[a-zA-Z]:)([\/]|$)/g).test(url.pathname) // for windows drive letter
      ? url.pathname.slice(1) // because url.pathname always starts by /, so windows is /c:/abc
      : url.pathname
  );
}
