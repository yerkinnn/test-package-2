export type MakeNotNull<T, K extends keyof T> = { [key in Exclude<keyof T, K>]: T[key] } & {
  [key in K]: Exclude<T[key], null>;
};

export type NotNullable<T> = { [K in keyof T]: NonNullable<T[K]> };

export type Keys<T extends object> = Array<keyof T>;

export type ValueOf<T> = T[keyof T];

/**
 * Represents a numeric value stored as a string.
 * Used for values that must preserve exact decimal representation.
 *
 * Separator is `dot` (`.`)
 *
 * @example
 * "100"
 * "100.99"
 */
export type NumericString = string;
