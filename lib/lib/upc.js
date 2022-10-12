"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upc = void 0;
var lib_1 = require("./lib");
/**
 *
 * @param value String UPC
 * @description How to check if the IMEI is valid:
 * 1. Cut the check digit from the UPC number
 * 2. Starting from the left, sum every digit in odd positions
 * 3. Multiply the result by 3
 * 4. Sum every digit in even positions
 * 5. Add the results of the last two steps together
 * 6. Sum the check digit value with the result
 * 7. Use the modulo function
 * @return A boolean of weather the UPC is valid or not
 */
var upc = function (value) {
    if (!lib_1.supported.includes(typeof value))
        return new TypeError("The UPC is a of a type not supported");
    var str_upc = String(value);
    var length = str_upc.length;
    if (length !== 12)
        return false;
    var sum = 0;
    var list = str_upc.split('');
    var checksum = Number(list[length - 1]);
    for (var i = 0; i < length - 1; i++) {
        var number = Number(list[i]);
        if (i % 2 !== 0) {
            sum += number;
        }
        else {
            sum += number * 3;
        }
    }
    return (10 - (sum % 10)) % 10 === checksum;
};
exports.upc = upc;
