import { ValueOf } from "../../shared/helpers/utility-types";

export const getRandomValueExcept = <T extends object>(
  enumObject: T,
  ...excludedValues: ValueOf<T>[]
): ValueOf<T> => {
  const values = Object.values(enumObject) as ValueOf<T>[];
  const filteredValues = values.filter(
    (value) => !excludedValues.includes(value)
  );
  const randomIndex = Math.floor(Math.random() * filteredValues.length);

  return filteredValues[randomIndex];
};
