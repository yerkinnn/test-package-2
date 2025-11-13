import { plainToInstance } from 'class-transformer';
import { ClassConstructor } from 'class-transformer/types/interfaces';
import { validateSync } from 'class-validator';

export function parseJsonToInstanceSafe<T>(input: unknown, cls: ClassConstructor<T>): T | T[] {
  try {
    const json = typeof input === 'string' ? JSON.parse(input) : input;

    const instance = plainToInstance(cls, json as unknown, {
      enableImplicitConversion: true,
      exposeDefaultValues: true,
    });

    const items = Array.isArray(instance) ? instance : [instance];
    const errors = items.flatMap((i) =>
      validateSync(i as object, { whitelist: true, forbidUnknownValues: true }),
    );

    if (errors.length) {
      throw new Error('Validation failed');
    }

    return instance as T | T[];
  } catch (e) {
    throw e instanceof Error ? e : new Error('Invalid JSON');
  }
}
