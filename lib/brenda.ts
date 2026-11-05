// Inferred from the supplied age (26 in November 2026) and birthday (4 April).
const BIRTH_YEAR = 2000;
const BIRTH_MONTH = 4;
const BIRTH_DAY = 4;

const localCalendar = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/Sao_Paulo',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
});

export function getBrendaAge(now: Date = new Date()): number {
  const parts = localCalendar.formatToParts(now);
  const year = Number(parts.find((part) => part.type === 'year')!.value);
  const month = Number(parts.find((part) => part.type === 'month')!.value);
  const day = Number(parts.find((part) => part.type === 'day')!.value);
  const birthdayIsAhead = month < BIRTH_MONTH || (month === BIRTH_MONTH && day < BIRTH_DAY);

  return year - BIRTH_YEAR - (birthdayIsAhead ? 1 : 0);
}
