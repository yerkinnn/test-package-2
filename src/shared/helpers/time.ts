export function msToSeconds(ms: number): number {
  return Math.floor(ms / 1000);
}

export function msToMinutes(ms: number): number {
  return Math.floor(msToSeconds(ms) / 60);
}

export function msToHours(ms: number): number {
  return Math.floor(msToMinutes(ms) / 60);
}

export function msToDays(ms: number): number {
  return Math.floor(msToHours(ms) / 24);
}

export function daysToSeconds(days: number): number {
  return days * 24 * 60 * 60;
}
