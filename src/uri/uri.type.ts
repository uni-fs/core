export interface IURI {
  readonly scheme: string;
  readonly authority: IURIAuthority | undefined;
  readonly path: string;
  readonly query: string | undefined;
  readonly fragment: string | undefined;
}

export interface IURIAuthority {
  readonly userinfo: string | undefined;
  readonly host: string;
  readonly port: number | undefined;
}

// https://en.wikipedia.org/wiki/Uniform_Resource_Identifier
// https://en.wikipedia.org/wiki/URL


