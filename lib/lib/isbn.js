"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isbn = void 0;
var lib_1 = require("./lib");
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
var isbn = function (value) {
    if (!lib_1.supported.includes(typeof value))
        return new TypeError("The ISBN is a of a type not supported");
    var str_isbn = String(value).replace(/-/g, '');
    var length = str_isbn.length;
    var sum = 0;
    var list = str_isbn.split('');
    var checksum = Number(list[length - 1]);
    if (length === 10) {
        for (var i = length + 1; i >= 1; i--) {
            var number = Number(list[i]);
            sum += number * i;
        }
        return sum % 11 === 0;
    }
    else if (length === 13) {
        for (var i = 0; i < length - 1; i++) {
            var number = Number(list[i]);
            if (i % 2 !== 0) {
                sum += number * 3;
            }
            else {
                sum += number * 1;
            }
        }
        return (sum % 10 !== 0 ? 10 : 0) - (sum % 10) === checksum;
    }
    return false;
};
exports.isbn = isbn;
