/**
 *
 * @param value String EAN
 * @description How to check if the IMEI is valid:
 * 1. Cut the check digit from the EAN number
 * 2. Starting from the right, sum every digit in even positions
 * 3. Multiply the result by 3
 * 4. Starting from the right, sum every digit in odd positions
 * 5. Add the results of the last two steps together
 * 6. Sum the check digit value with the result
 * 7. Use the modulo function
 * @return A boolean of weather the EAN is valid or not
 */
export declare const ean: (value: number | string) => boolean | TypeError;
