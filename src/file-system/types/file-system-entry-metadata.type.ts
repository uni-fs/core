import { IEntryType } from './entry-type.type';

export interface IFileSystemEntryMetadata {
  readonly type: IEntryType;
  readonly accessTime?: number | undefined; // ms
  readonly modificationTime?: number | undefined; // ms
  readonly changeTime?: number | undefined; // ms
  readonly birthTime?: number | undefined; // ms
}
