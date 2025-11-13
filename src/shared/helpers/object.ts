import { isNotEmpty } from './type-validators';

export function hasNonNullValue<T extends object>(object: T): boolean {
  return Object.values(object).some(isNotEmpty);
}
