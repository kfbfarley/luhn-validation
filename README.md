<h1 align="center">
      <br>A full TypeScript EAN, UPC, IMEI, EID, ISBN & card validation tool<br/>
</h1>

A quick and useful TypeScript package verify whether the EAN, UPC, IMEI, EID, ISBN, and card is valid or not, it uses <b>Luhn algorithm</b> validation method.

> [Luhn algorithm](https://www.geeksforgeeks.org/luhn-algorithm/) also known as the modulus 10 or mod 10 algorithm, is a simple checksum formula used to validate a variety of identification numbers.

## 🚀 Technologies

This project was built using the following technologies:

- [Typescript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [Prettier](https://prettier.io/)
- [Tslint](https://palantir.github.io/tslint/)
- [BigInteger](https://github.com/peterolson/BigInteger.js)

## 💻 Installation

To add this package to your project, simply execute the following command:

> Remind: You must be on your project root directory

```
$ npm install luhn-validation
```

## 🔎 Usage

```
$ import { imei } from 'luhn-validation';
```

> Tip: Place your mouse pointer over the validate and you will have access to descriptions

### Methods

- ean (string | number)
  > Validate EAN number
- upc (string | number)
  > Validate UPC number
- imei (string | number)
  > Validate IMEI number
- eid (string)
  > Validate EID number
- isbn (string | number)
  > Validate ISBN number
- card (string | number)
  > Validate credit/debit card number

## 📏 Example

If you want to check if an IMEI is valid or not, do the following:

```
$ import { imei } from 'luhn-validation';
// validate function returns a boolean

console.log(imei(868241056923981))
//boolean result
```

## 👍 Contributing

Contributions are what make this platform an amazing place to learn, inspire, and create. Please feel free to visit the [open issues](https://github.com/kfbfarley/luhn-validation/issues) section to propose or create a related issue.

## 📄 Licensing

This repository is MIT licensed, as found in the [LICENSE][l] file.

[luhn-validation](https://github.com/kfbfarley/luhn-validation) has no documentation, just this repo.

[l]: https://github.com/kfbfarley/luhn-validation/blob/master/LICENSE
