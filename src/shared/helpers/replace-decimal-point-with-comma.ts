import { NumericString } from './utility-types';

/**
 * Replaces the decimal point (`.`) with a comma (`,`) in a numeric string.
 *
 * @returns A string with comma as decimal separator
 * @example
 * replaceDecimalPointWithComma('100.99'); // '100,99'
 */
export function replaceDecimalPointWithComma(value: NumericString): string {
  return value.replace('.', ',');
}
