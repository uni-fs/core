import { IDefaultNotificationsUnion, IObservable, throwError } from '@lirx/core';
import { isProtocolSupported } from './is-protocol-supported';

export function ensureURLIsSupportedAndCastToObservable<GNextValue>(
  protocols: ReadonlySet<string>,
  url: URL,
  callback: (url: URL) => IObservable<IDefaultNotificationsUnion<GNextValue>>,
): IObservable<IDefaultNotificationsUnion<GNextValue>> {
  if (isProtocolSupported(protocols, url)) {
    return callback(url);
  } else {
    return throwError(new Error(`Unsupported protocol: '${url.protocol}'`));
  }
}



