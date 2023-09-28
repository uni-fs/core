// import { freemem } from 'os';
//
// export function getOptimalBufferSize(
//   memoryDivider: number = 4,
// ): number {
//   return Math.min(
//     0x7fffffff, // 2Go (max size of ArrayBuffer)
//     freemem() / memoryDivider,
//   );
// }


export function getOptimalBufferSize(
  memoryDivider: number = 4,
): number {
  return 1e6;
}
