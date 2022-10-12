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
export declare const imei: (value: number | string) => boolean | TypeError;
