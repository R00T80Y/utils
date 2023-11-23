/**
 * Форматирует число раставляя пробелы "1 000 000"
 *
 * @category Format
 * @example numberWithSpaces(1000000)
 * @version 0.0.1
 * @see https://github.com/R00T80Y
 */
export const numberWithSpaces = (input: number): string => {
  const value = input.toString();

  const re = /\B(?=(\d{3})+(?!\d))/g;

  const isFloat = /\./.test(value);

  if (isFloat) {
    const parts = value.split('.');

    return String(parts.shift()).replace(re, ' ') + '.' + parts.join('');
  }

  return value.replace(re, ' ');
};
