/**
 * Возвращает, является ли значение строкой
 *
 * @param {any} input unknown - Может принимать любое значение
 * @returns {boolean} boolean
 * @example
 * ```ts
 * const status = isString('Test') ? 'OK' : 'FAIL'; // 'OK'
 * const strings = [1, 2, 3, 'text', false].filter(isString); // ['text']
 * ```
 * @category Is
 * @version 0.0.3
 */
export function isString(input: unknown): input is string {
  return Object.prototype.toString.call(input) === '[object String]';
}
