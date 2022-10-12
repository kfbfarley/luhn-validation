import { supported } from './lib';

/**
 *
 * @param value String UPC
 * @description How to check if the IMEI is valid:
 * 1. Cut the check digit from the UPC number
 * 2. Starting from the left, sum every digit in odd positions
 * 3. Multiply the result by 3
 * 4. Sum every digit in even positions
 * 5. Add the results of the last two steps together
 * 6. Sum the check digit value with the result
 * 7. Use the modulo function
 * @return A boolean of weather the UPC is valid or not
 */
export const upc = (value: number | string): boolean | TypeError => {
  if (!supported.includes(typeof value)) return new TypeError(`The UPC is a of a type not supported`);
  const str_upc = String(value);

  const length = str_upc.length;
  if (length !== 12) return false;

  let sum = 0;
  const list = str_upc.split('');
  const checksum = Number(list[length - 1]);

  for (let i = 0; i < length - 1; i++) {
    const number = Number(list[i]);
    if (i % 2 !== 0) {
      sum += number;
    } else {
      sum += number * 3;
    }
  }
  return (10 - (sum % 10)) % 10 === checksum;
};
