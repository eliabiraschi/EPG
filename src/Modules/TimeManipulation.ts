const MIN_REM_RATIO = 0.5;

export const minutesToRem = (minutes: number): number => minutes * MIN_REM_RATIO;

export const addLeadingZero = (input: number): string => {
  return ('0' + input).slice(-2);
}

export const parseTime = (start: string, end: string): string => {
  const dateStart = new Date(start);
  const dateEnd = new Date(end);
  const parsedStart = `${addLeadingZero(dateStart.getHours())}:${addLeadingZero(dateStart.getMinutes())}`;
  const parsedEnd = `${addLeadingZero(dateEnd.getHours())}:${addLeadingZero(dateEnd.getMinutes())}`;
  return `${parsedStart} - ${parsedEnd}`;
};

export const getMinutesToMidnight = (inputDate: string): number => {
  const date = new Date(inputDate);
  return (24 * 60) - ((date.getHours() * 60) + date.getMinutes());
}

export const getDurationInMin = (start: string, end: string): number => {
  const dateStart = new Date(start);
  const dateEnd = new Date(end);
  return Math.round(dateEnd.getTime() - dateStart.getTime()) / (60 * 1000);
};

export const getWidthByDuration = (start: string, end: string): number => {
  const durationInMinutes = getDurationInMin(start, end);
  return minutesToRem(durationInMinutes);
};

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

export const getDistanceFromMidnight = (): number => {
  const minutesFromMidnight = getMinutesFromMidnight();
  return minutesToRem(minutesFromMidnight);
};

export const getDistanceToMidnight = (inputDate: string): number => {
  const minutesToMidnight = getMinutesToMidnight(inputDate);
  return minutesToRem(minutesToMidnight);
};
