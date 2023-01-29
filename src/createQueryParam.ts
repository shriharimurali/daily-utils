export const createQueryParam = (url: string, queryKey: string, value: string, isFirst = false) => {
  if (!url || !value) return '';

  return `${url}${isFirst ? `?${queryKey}=${value}` : `&${queryKey} = ${value}`}`;
};
