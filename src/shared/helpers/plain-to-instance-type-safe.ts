import { ClassConstructor } from 'class-transformer/types/interfaces';
import { plainToInstance } from 'class-transformer';

export function plainToInstanceTypeSafe<T, U extends T>(cls: ClassConstructor<T>, plain: U): T;
export function plainToInstanceTypeSafe<T, U extends T>(cls: ClassConstructor<T>, plain: U[]): T[];
export function plainToInstanceTypeSafe<T>(cls: ClassConstructor<T>, plain: unknown): T {
  return plainToInstance(cls, plain);
}
