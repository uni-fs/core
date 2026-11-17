import { IEntry } from '../entry/entry.type';
import { IEntryMetadata } from '../entry/types/entry-metadata.type';
import { ICollectionReadTrait } from './traits/read/collection.read.trait';
import { ICollectionMetadata } from './types/collection-metadata.type';

export interface ICollection<//
  GMetadata extends ICollectionMetadata,
  GChildMetadata extends IEntryMetadata = IEntryMetadata
  //
> extends IEntry<GMetadata>, //
  ICollectionReadTrait<GChildMetadata>
//
{
}

