import { IEntryMetadata } from '../../entry/types/entry-metadata.type';

export interface ICollectionMetadata extends IEntryMetadata {
  readonly type: 'collection';
}
