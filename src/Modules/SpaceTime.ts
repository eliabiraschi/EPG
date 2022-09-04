export const addLeadingZero = (input: number): string => {
  return ('0' + input).slice(-2);
}

export const parseTime = (start: string, end: string): string => {
  const dateStart = new Date(start);
  const dateEnd = new Date(end);
  return `${addLeadingZero(dateStart.getHours())}:${addLeadingZero(dateStart.getMinutes())} - ${addLeadingZero(dateEnd.getHours())}:${addLeadingZero(dateEnd.getMinutes())}`
};

export const getMinutesToMidnight = (inputDate: string): number => {
  const date = new Date(inputDate);
  return (24 * 60) - ((date.getHours() * 60) + date.getMinutes());
}

export const programDurationInSec = (start: string, end: string): number => {
  const dateStart = new Date(start);
  const dateEnd = new Date(end);
  return Math.round(dateEnd.getTime() - dateStart.getTime());
};

export const convertDurationToWidth = (duration: number): number => duration / 100000;

export const isNow = (start: string, end: string): boolean => {
  const dateStart = new Date(start);
  const dateEnd = new Date(end);
  const now = new Date();
  const notTime = now.getTime();
  return (notTime >= dateStart.getTime() && notTime < dateEnd.getTime());
};

export const getMinutesFromMidnight = (): number => {
  const now = new Date();
  return (now.getHours() * 60) + now.getMinutes(); 
};
