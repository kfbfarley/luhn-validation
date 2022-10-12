import { supported, sumdig } from './lib';

/**
 *
 * @param value String IMEI
 * @description How to check if the IMEI is valid:
 * 1. Starting from the right, double every second digit
 * 2. If doubling of a number results in a two digits number, then add the digits of the product
 * 3. Take the sum of all digits
 * 3. Check if the sum is divisible by 10.
 * @return A boolean of weather the IMEI is valid or not
 */
export const imei = (value: number | string): boolean | TypeError => {
  if (!supported.includes(typeof value)) return new TypeError(`The IMEI is a of a type not supported`);
  const str_imei = String(value);

  const length = str_imei.length;
  if (length !== 15) return false;

  let sum = 0;
  const list = str_imei.split('');

  for (let i = length - 1; i >= 0; i--) {
    const number = Number(list[i]);
    if (i % 2 !== 0) {
      const digits = number * 2;
      const summed = sumdig(digits);
      if (typeof summed === 'number') sum += summed;
    } else {
      sum += number;
    }
  }

  return sum % 10 === 0;
};
