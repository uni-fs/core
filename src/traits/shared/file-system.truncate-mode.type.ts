// minimum truncate modes that the FS must support
export type IFileSystemTruncateMode =
  | 'clear' // clears the file (size = 0), then writes the data (final size = buffer.length)
  | 'truncate' // writes the data, then cuts the file (final size = position + buffer.length)
  | 'none' // no operations before or after writing the data
  ;
