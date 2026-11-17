import { IGenericFile } from '../file.type';

export interface IFileConstructor<GFile extends IGenericFile> {
  new(
    uri: string
  ): GFile;
}

export type IGenericFileConstructor = IFileConstructor<any>;
