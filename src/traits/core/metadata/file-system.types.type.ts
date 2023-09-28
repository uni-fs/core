// minimum types that the FS must support
export type IFileSystemTypes =
  | 'file'
  | 'directory'
  | 'root'
  ;

export type IFileSystemTypesSet = Set<IFileSystemTypes>;
