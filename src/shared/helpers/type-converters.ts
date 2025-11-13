import { toDate } from 'date-fns';
import { isEmpty } from './type-validators';

export const toStringOrNull = (value: unknown): string | null => (value ? String(value) : null);

export const toNumberOrNull = (value: string | null | undefined): number | null => {
  if (isEmpty(value)) {
    return null;
  }

  const num = Number(value);

  return isNaN(num) ? null : num;
};

export const toDateOrNull = (value: string | null | undefined): Date | null =>
  value ? toDate(value) : null;
