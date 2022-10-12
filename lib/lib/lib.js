"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumdig = exports.supported = void 0;
/**
 * Supported argument formats
 */
exports.supported = ['string', 'number'];
/**
 *
 * @param digits Number to sum digits
 * @description The sumdig function receives a number and sum the digits
 * @returns The sum of the digits
 */
var sumdig = function (digits) {
    if (!exports.supported.includes(typeof digits))
        return new TypeError("The parameter digits is a of a type not supported");
    var numbers = String(digits);
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += Number(numbers[i]);
    }
    return sum;
};
exports.sumdig = sumdig;
