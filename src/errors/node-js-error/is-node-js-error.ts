import { INodeJSError } from './node-js-error.type';

export function isNodeJSError(
  value: any,
): value is INodeJSError {
  return ('code' in value);
}

