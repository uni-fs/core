/**
 * Clones an URL
 */
export function cloneURL(
  url: URL,
): URL {
  return new URL(url.href);
}
