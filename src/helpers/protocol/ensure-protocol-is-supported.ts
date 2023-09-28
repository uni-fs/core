import { isProtocolSupported } from './is-protocol-supported';

export function ensureProtocolIsSupported(
  protocols: ReadonlySet<string>,
  url: URL,
): void | never {
  if (!isProtocolSupported(protocols, url)) {
    throw new Error(`Unsupported protocol: '${ url.protocol }'`);
  }
}
