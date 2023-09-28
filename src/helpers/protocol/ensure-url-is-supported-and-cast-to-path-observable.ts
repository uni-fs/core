import { IDefaultNotificationsUnion, IObservable } from '@lirx/core';
import { Path } from '@lifaon/path';
import { urlToPath } from '../url/url-to-path';
import { ensureURLIsSupportedAndCastToObservable } from './ensure-url-is-supported-and-cast-to-observable';

export function ensureURLIsSupportedAndCastToPathObservable<GNextValue>(
  protocols: ReadonlySet<string>,
  url: URL,
  callback: (path: Path) => IObservable<IDefaultNotificationsUnion<GNextValue>>,
): IObservable<IDefaultNotificationsUnion<GNextValue>> {
  return ensureURLIsSupportedAndCastToObservable(
    protocols,
    url,
    (url: URL): IObservable<IDefaultNotificationsUnion<GNextValue>> => {
      return callback(urlToPath(url));
    },
  );
}
