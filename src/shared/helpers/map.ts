import { ConflictException } from '@nestjs/common';

export function getMapValueOrFail<T, K>(map: Map<T, K>, key: T): K {
  const value = map.get(key);

  if (!value) {
    throw new ConflictException('Map value not found');
  }

  return value;
}
