export type IRange = [
  start: number,
  end: number,
];

/**
 * Returns a proper Range from a file's size
 *  - start ∈ [0, end]
 *  - end ∈ [start, file.size]
 */
export function fileRangeFromSize(
  size: number,
  start: number | undefined,
  end: number | undefined,
): IRange {

  const _start: number = getFileStartFromSize(
    size,
    start,
  );

  const _end: number = getFileEndFromSize(
    size,
    _start,
    end,
  );

  return [
    _start,
    _end,
  ];
}

export function getFileStartFromSize(
  size: number,
  start: number | undefined,
): number {
  if (start === void 0) {
    return 0;
  } else if (!Number.isSafeInteger(start)) {
    throw new RangeError(`start must be in the range: [-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`);
  } else if (start < 0) {
    return Math.max(0, size + start);
  } else if (start > size) {
    return size;
  } else {
    return start!;
  }
}

export function getFileEndFromSize(
  size: number,
  start: number,
  end: number | undefined,
): number {
  if (end === void 0) {
    return size;
  } else if (!Number.isSafeInteger(end)) {
    throw new RangeError(`end must be in the range: [-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`);
  } else if (end < 0) {
    return Math.max(start, size + end);
  } else if (end > size) {
    return size;
  } else {
    return Math.max(start, end!);
  }
}
