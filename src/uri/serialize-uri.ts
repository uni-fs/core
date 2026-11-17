import { IURI, IURIAuthority } from './uri.type';

export function serializeURI(
  {
    scheme,
    authority,
    path,
    query,
    fragment,
  }: IURI,
): string {
  return `${scheme}:` +
    ((authority === void 0) ? '' : `//${serializeURIAuthority(authority)}`)
    + path
    + ((query === void 0) ? '' : `?${query}`)
    + ((fragment === void 0) ? '' : `#${fragment}`);
}

export function serializeURIAuthority(
  {
    userinfo,
    host,
    port,
  }: IURIAuthority,
): string {
  return ((userinfo === void 0) ? '' : `${userinfo}@`)
    + host
    + ((port === void 0) ? '' : `:${port}`);
}
