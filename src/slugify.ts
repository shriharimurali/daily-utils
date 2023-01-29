export const slugify = (str: string) => {
  if (!str) return null;

  return str
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};
