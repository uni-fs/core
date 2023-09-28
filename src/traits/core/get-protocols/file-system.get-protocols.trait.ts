import { IFileSystemGetProtocolsConfig } from './file-system.get-protocols.config';
import { IFileSystemGetProtocolsFunction } from './file-system.get-protocols.function-definition';

export interface IFileSystemGetProtocolsTrait<GConfig extends IFileSystemGetProtocolsConfig> {
  getProtocols: IFileSystemGetProtocolsFunction<GConfig>;
}
