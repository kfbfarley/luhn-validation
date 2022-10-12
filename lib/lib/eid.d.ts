/**
 *
 * @param value String EID
 * @description How to check if the IMEI is valid:
 * 1. Compute the remainder of the EID number on division by 97
 * 2. If the remainder of the division is 1, the verification is successful
 * @return A boolean of weather the EID is valid or not
 */
export declare const eid: (value: string) => boolean | TypeError;
