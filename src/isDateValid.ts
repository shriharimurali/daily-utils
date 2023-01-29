export const isDateValid = (date: Date) => {
  if (!date) return false;

  return !Number.isNaN(date.getTime());
};
