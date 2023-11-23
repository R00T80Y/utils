/**
 * Это строка или нет?
 *
 * @category Is
 * @example isString([1, undefined, NaN, 2, null, 3, 0])
 * @version 0.0.2
 * @see https://github.com/R00T80Y
 */
export const isString = (input: any): input is string => {
  return Object.prototype.toString.call(input) === '[object String]';
};
