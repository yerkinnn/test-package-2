/**
 * Converts plain object to Map. Does not work with arrays.
 * @param obj - Plain object to convert
 * @returns Map with the same key-value pairs as source object
 * @example
 * const obj = { a: 1, b: 2 };
 * const map = objectToMap(obj); // Map(2) { 'a' => 1, 'b' => 2 }
 */
export const objectToMap = <K extends string | number, V>(obj: Record<K, V>): Map<string, V> => {
  return new Map(Object.entries(obj));
};
