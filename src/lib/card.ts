import { sumdig, supported } from './lib';

/**
 *
 * @param value String card
 * @description How to check if the IMEI is valid:
 * 1. Double the value of every other digit from right to left
 * 3. Add the digits of the results of the previous step to the remaining digits in the card number
 * 2. If the remainder of the division is 1, the verification is successful
 * @return A boolean of weather the card is valid or not
 */
export const card = (value: string | number): boolean | TypeError => {
  if (!supported.includes(typeof value)) return new TypeError(`The card is a of a type not supported`);
  const str_card = String(value);

  const length = str_card.length;
  if (length !== 16) return false;

  let sum = 0;
  const list = str_card.split('');

  for (let i = length - 1; i >= 0; i--) {
    const number = Number(list[i]);
    if (i % 2 !== 0) {
      sum += number;
    } else {
      const digits = number * 2;
      const summed = sumdig(digits);
      if (typeof summed === 'number') sum += summed;
    }
  }
  return sum % 10 === 0;
};
