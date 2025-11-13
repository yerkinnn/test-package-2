import { randomInt } from 'crypto';

export const generateVerificationCode = (length = 6): string => {
  const start = parseInt('1'.padEnd(length, '0'), 10);
  const end = parseInt('9'.padEnd(length, '9'), 10);

  return `${randomInt(start, end)}`;
};
