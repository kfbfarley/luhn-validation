"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imei = void 0;
var lib_1 = require("./lib");
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
var imei = function (value) {
    if (!lib_1.supported.includes(typeof value))
        return new TypeError("The IMEI is a of a type not supported");
    var str_imei = String(value);
    var length = str_imei.length;
    if (length !== 15)
        return false;
    var sum = 0;
    var list = str_imei.split('');
    for (var i = length - 1; i >= 0; i--) {
        var number = Number(list[i]);
        if (i % 2 !== 0) {
            var digits = number * 2;
            var summed = (0, lib_1.sumdig)(digits);
            if (typeof summed === 'number')
                sum += summed;
        }
        else {
            sum += number;
        }
    }
    return sum % 10 === 0;
};
exports.imei = imei;
