/**
 *
 * @param value String card
 * @description How to check if the IMEI is valid:
 * 1. Double the value of every other digit from right to left
 * 3. Add the digits of the results of the previous step to the remaining digits in the card number
 * 2. If the remainder of the division is 1, the verification is successful
 * @return A boolean of weather the card is valid or not
 */
export declare const card: (value: string | number) => boolean | TypeError;
