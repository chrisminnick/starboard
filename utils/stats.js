export const convertTimeToMinutes = timestamp => (timestamp/1000/60).toFixed(2);
export const shortestSprint = arr => convertTimeToMinutes(Math.min(...arr));
export const longestSprint = arr => convertTimeToMinutes(Math.max(...arr));
export const totalSprints = arr => convertTimeToMinutes(arr.reduce((a,b) => a + b, 0));
export const averageSprint = arr => convertTimeToMinutes(arr.reduce((a,b) => a + b, 0) / arr.length);