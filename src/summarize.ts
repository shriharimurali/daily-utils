export const summarize = (str: string, max: number) => {
  if (!str) return null;

  return str.length > max ? `${str.substring(0, max)}...` : str;
};
