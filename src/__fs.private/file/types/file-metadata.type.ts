import { IEntryMetadata } from '../../entry/types/entry-metadata.type';

export interface IFileMetadata extends IEntryMetadata {
  readonly type: 'file';
  readonly accessTime: number | undefined; // ms
  readonly modificationTime: number | undefined; // ms
  readonly changeTime: number | undefined; // ms
  readonly birthTime: number | undefined; // ms
}
