import { format, formatISO } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { enUS } from 'date-fns/locale';

/** formats to `yyyy-MM-dd` (i.e. `2025-12-22`) */
export const formatToISODate = (date: Date | number): string =>
  formatISO(date, { representation: 'date' });

/** formats to `yyyy-MM-dd HH:mm:ss.SSS` */
export const formatToFullDateTime = (date: Date | number): string =>
  format(date, 'yyyy-MM-dd HH:mm:ss.SSS');

/** format to `dd.MM.yyyy HH:mm` */
export const formatToShortDateTime = (date: Date | number): string =>
  format(date, 'dd.MM.yyyy HH:mm');

/** formats to `dd.MM.yyyy` */
export const formatToDate = (date: Date | number): string => format(date, 'dd.MM.yyyy');

/** formats to MMMM d, yyyy */
export const formatToEnglishDate = (date: Date): string => {
  return format(date, 'MMMM d, yyyy', { locale: enUS });
};

/** formats to `dd-MMM-yyyy` (i.e. `01-JAN-2000`) */
export function formatToDdMmmYyyy(date: Date): string {
  return format(date, 'dd-MMM-yyyy').toUpperCase();
}

export const isBusinessDay = (date: Date): boolean => {
  const day = date.getDay();

  // Monday is 1 and Friday is 5
  return day >= 1 && day <= 5;
};

export const convertToAlmatyTime = (date: Date): Date => {
  // const timeZone = 'Asia/Almaty'; // UTC+6
  const timeZone = 'Asia/Aqtobe'; // UTC+5 // ! "date-fns-tz" still has old timezone for "Almaty", thus use "Aqtobe"

  return toZonedTime(date, timeZone);
};

export const convertToUTCTime = (date: Date): Date => {
  const timeZone = 'UTC'; // Equivalent to UTC+0

  return toZonedTime(date, timeZone);
};
