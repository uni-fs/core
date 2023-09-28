export function isProtocolSupported(
  protocols: ReadonlySet<string>,
  url: URL,
): boolean {
  return protocols.has(url.protocol);
}

