/**
 *
 * @param value String ISBN
 * @description How to check if the ISBN-10 is valid:
 * 1. Starting from the left, calculate 10 times the first number
 * 2. Starting from the right, sum every digit in even positions
 * 3. Multiply the result by 3
 * 4. Starting from the right, sum every digit in odd positions
 * 5. Add the results of the last two steps together
 * 6. Sum the check digit value with the result
 * 7. Use the modulo function
 * @description How to check if the ISBN-13 is valid:
 * 1. Starting from the left, alternately multiplied by 1 or 3
 * 2. Starting from the right, sum every digit in even positions
 * 3. Sum the results of the last two steps together
 * 7. Use the modulo function
 * @return A boolean of weather the ISBN is valid or not
 */
export declare const isbn: (value: number | string) => boolean | TypeError;
