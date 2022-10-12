"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.card = void 0;
var lib_1 = require("./lib");
/**
 *
 * @param value String card
 * @description How to check if the IMEI is valid:
 * 1. Double the value of every other digit from right to left
 * 3. Add the digits of the results of the previous step to the remaining digits in the card number
 * 2. If the remainder of the division is 1, the verification is successful
 * @return A boolean of weather the card is valid or not
 */
var card = function (value) {
    if (!lib_1.supported.includes(typeof value))
        return new TypeError("The card is a of a type not supported");
    var str_card = String(value);
    var length = str_card.length;
    if (length !== 16)
        return false;
    var sum = 0;
    var list = str_card.split('');
    for (var i = length - 1; i >= 0; i--) {
        var number = Number(list[i]);
        if (i % 2 !== 0) {
            sum += number;
        }
        else {
            var digits = number * 2;
            var summed = (0, lib_1.sumdig)(digits);
            if (typeof summed === 'number')
                sum += summed;
        }
    }
    return sum % 10 === 0;
};
exports.card = card;
