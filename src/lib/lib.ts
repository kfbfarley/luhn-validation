/**
 * Supported argument formats
 */
export const supported = ['string', 'number'];

/**
 *
 * @param digits Number to sum digits
 * @description The sumdig function receives a number and sum the digits
 * @returns The sum of the digits
 */
export const sumdig = (digits: string | number): number | TypeError => {
  if (!supported.includes(typeof digits)) return new TypeError(`The parameter digits is a of a type not supported`);
  const numbers = String(digits);

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i]);
  }

  return sum;
};
