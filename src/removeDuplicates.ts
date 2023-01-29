export const removeDuplicates = (arr: any[]) => {
  if (!arr || !Array.isArray(arr)) return null;

  return [...new Set(arr)];
};
