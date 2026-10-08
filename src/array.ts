/**
 * Array utility functions.
 */
export function chunk<T>(array: T[], size = 1): T[][] {
  const length = array == null ? 0 : array.length;
  if (!length || size < 1) return [];
  
  let index = 0;
  let resIndex = 0;
  const result = new Array(Math.ceil(length / size));

  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size));
  }
  return result;
}

export function compact<T>(array: (T | null | undefined | false | 0 | '')[]): T[] {
  return array.filter(Boolean) as T[];
}
