/** Converts integer to two decimal string (last 2 digits become decimals), e.g. 5035 → "50,35" */
export function formatIntegerToTwoDecimalString(value: number): string {
  return `${value / 100}`.replace('.', ',');
}

/**
 * Rounds a number to the nearest integer, rounding .5 down. Example:
 * - 1.5 -> 1
 * - 1.6 -> 2
 * - -1.5 -> -2
 * - -1.4 -> -1
 */
export function roundHalfDown(value: number): number {
  const fraction = Math.abs(value - Math.trunc(value));

  return fraction === 0.5 ? Math.floor(value) : Math.round(value);
}
