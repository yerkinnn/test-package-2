import { ClassConstructor } from 'class-transformer';
import { parseJsonToInstanceSafe } from './parse-json-to-instance-safe';

export function parseJsonToInstanceArraySafe<T>(input: unknown, cls: ClassConstructor<T>): T[] {
  const result = parseJsonToInstanceSafe<T>(input, cls);

  return Array.isArray(result) ? result : [result];
}
