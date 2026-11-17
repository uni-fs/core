import { IEntryMetadata } from '../../types/entry-metadata.type';
import { IEntryGetMetadataFunction } from './file.get-metadata.function-definition';

export interface IEntryGetMetadataTrait<GMetadata extends IEntryMetadata> {
  readonly getMetadata: IEntryGetMetadataFunction<GMetadata>;
}

