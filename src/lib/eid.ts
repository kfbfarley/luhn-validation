import bigInt = require('big-integer');
import { supported } from './lib';

/**
 *
 * @param value String EID
 * @description How to check if the IMEI is valid:
 * 1. Compute the remainder of the EID number on division by 97
 * 2. If the remainder of the division is 1, the verification is successful
 * @return A boolean of weather the EID is valid or not
 */
export const eid = (value: string): boolean | TypeError => {
  if (!supported.includes(typeof value)) return new TypeError(`The EID is a of a type not supported`);
  const str_eid = String(value);

  const length = str_eid.length;
  if (length !== 32) return false;

  return bigInt(str_eid).mod(97).equals(1);
};
