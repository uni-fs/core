import { IEntryGetMetadataTrait } from './traits/get-metadata/file.get-metadata.trait';
import { IEntryGetURITrait } from './traits/get-uri/file.get-uri.trait';
import { IEntryRemoveTrait } from './traits/remove/entry.remove.trait';
import { IEntryMetadata } from './types/entry-metadata.type';

export interface IEntry<GMetadata extends IEntryMetadata> extends //
  IEntryGetURITrait,
  IEntryGetMetadataTrait<GMetadata>,
  IEntryRemoveTrait
//
{
}

export type IGenericEntry = IEntry<any>;
