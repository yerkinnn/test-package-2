import { ValueOf } from "./utility-types";

export function getEnumValues<T extends object>(enumObject: T): ValueOf<T>[] {
  return Object.values(enumObject).filter(
    (value) => typeof value === "string"
  ) as ValueOf<T>[];
}

export function mergeEnumValues(...enums: object[]): string[] {
  return enums.reduce<string[]>(
    (acc, currentEnum) => [...acc, ...getEnumValues(currentEnum)],
    []
  );
}
