"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ean = void 0;
var lib_1 = require("./lib");
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
var ean = function (value) {
    if (!lib_1.supported.includes(typeof value))
        return new TypeError("The EAN is a of a type not supported");
    var str_ean = String(value);
    var length = str_ean.length;
    if (length !== 13)
        return false;
    var sum = 0;
    var list = str_ean.split('');
    var checksum = Number(list[length - 1]);
    for (var i = length - 2; i >= 0; i--) {
        var number = Number(list[i]);
        if (i % 2 !== 0) {
            sum += number * 3;
        }
        else {
            sum += number;
        }
    }
    return (10 - (sum % 10)) % 10 === checksum;
};
exports.ean = ean;
