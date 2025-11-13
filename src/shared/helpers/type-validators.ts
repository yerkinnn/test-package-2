/**
 * Checks if value is a plain object suitable for use as a record.
 *
 * Returns `false` for:
 * - null
 * - undefined
 * - primitives (string, number, boolean)
 * - functions
 * - arrays
 * - built-in objects (Date, RegExp, etc.)
 * - class instances
 *
 * Returns `true` only for:
 * - Plain objects created with {} or new Object()
 * - Objects created with Object.create(null) (null prototype)
 */
export function isRecord(value: unknown): value is Record<string, unknown> {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);

  return prototype === Object.prototype || prototype === null;
}

export function isNumeric(value: unknown): boolean {
  return (typeof value === 'string' || typeof value === 'number') && !isNaN(+value);
}

/** Checks if given value is not empty (!== null, !== undefined). */
export function isNotEmpty<T>(value: T): value is Exclude<T, null | undefined> {
  return value !== null && value !== undefined;
}

/** Checks if given value is empty (=== null, === undefined). */
export function isEmpty(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}
