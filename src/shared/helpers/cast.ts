import { isObject as isObjectImpl } from 'class-validator';

export function castToObjectOrFail(value: unknown, message: string): object {
  if (typeof value !== 'object' || Array.isArray(value) || value === null) {
    throw new Error(message);
  }

  return value as object;
}

export function castToObjectArrayOrFail(value: unknown, message: string): object[] {
  const error = new Error(message);
  if (!Array.isArray(value)) {
    throw error;
  }
  for (const el of value) {
    if (typeof el !== 'object' || Array.isArray(el) || value === null) {
      throw error;
    }
  }

  return value as object[];
}

export function castToArrayOfStringsOrFail(value: unknown, message: string): string[] {
  if (Array.isArray(value) && value.every((element) => typeof element === 'string')) {
    return value as string[];
  }

  throw new Error(message);
}

export function isObject(obj: unknown): obj is Record<string, unknown> {
  return isObjectImpl(obj);
}
