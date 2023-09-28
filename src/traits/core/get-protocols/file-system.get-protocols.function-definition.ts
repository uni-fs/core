import { IFileSystemGetProtocolsConfig } from './file-system.get-protocols.config';

export interface IFileSystemGetProtocolsFunction<GConfig extends IFileSystemGetProtocolsConfig> {
  (): ReadonlySet<GConfig['protocols']>;
}

