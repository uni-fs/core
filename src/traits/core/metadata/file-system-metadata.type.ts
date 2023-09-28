import { IFileSystemTypesSet } from './file-system.types.type';

export interface IFileSystemMetadata {
  types: IFileSystemTypesSet;
  name: string;
  birthTime: number; // ms
}
