const CURRENCY_FORMAT = Intl.NumberFormat(undefined, { currency: 'SEK', style: 'currency' });


export function formatCurrency(value: number) {
  return CURRENCY_FORMAT.format(value);
}