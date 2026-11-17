import { parseURI } from '../uri/parse-uri';
import { IURI } from '../uri/uri.type';

export type ISchemeResolverEntry<GEntry> = readonly [
  scheme: string,
  entry: GEntry,
];

export class SchemeResolver<GEntry> {
  readonly #map: ReadonlyMap<string, GEntry>;

  constructor(
    entries: Iterable<ISchemeResolverEntry<GEntry>>,
  ) {
    this.#map = new Map<string, GEntry>(
      entries,
    );
  }

  resolve<GFactory extends (entry: GEntry, uri: string) => any>(
    uri: string,
    factory: GFactory,
  ): ReturnType<GFactory> {
    const parsedURI: IURI = parseURI(uri);
    const entry: GEntry | undefined = this.#map.get(parsedURI.scheme);
    if (entry === void 0) {
      throw new Error(`Unable to find a resolver satisfying the scheme "${parsedURI.scheme}"`);
    } else {
      return factory(entry, uri);
    }
  }
}




