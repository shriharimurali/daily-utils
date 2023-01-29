export const convertToCurrency = (num: number, currency = 'EUR', locale = 'nl-NL') => {
  if (!num) return null;

  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  });

  return formatter.format(num);
};
