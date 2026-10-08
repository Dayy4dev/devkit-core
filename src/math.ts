/**
 * Mathematical utilities.
 */
export function clamp(val: number, min: number, max: number): number {
  return Math.min(Math.max(val, min), max);
}

export function inRange(val: number, start: number, end?: number): boolean {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  return val >= Math.min(start, end) && val < Math.max(start, end);
}

export function randomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
