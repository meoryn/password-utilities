# Password Utilities

This library aims to provide a simple way to generate passwords.

## Install

To install the package, you can either use `npm`or `yarn`:

```

npm install @if24b247/password-utilities

// or

yarn install @if24b247/password-utilities

```

## How to use

### generateStrongPassword

`generateStrongPassword` generates a password based on the `length` given to the function (defaults to 12 if none provided). It uses a fixed set of characters to randomly generate a password.

```

const {generateStrongPassword} = require('@if24b247/password-utilities')

// generates a password with a length of 12
const password = generateStrongPassword();


// generates a password based on the input length
const longPassword = generateStrongPassword(24);

```


### isStrongPassword

`isStrongPassword` checks the the string given by a number of rules, such as the `length` and the characters used for the password.

```
const { isStrongPassword } = require('@if24b247/password-utilities')


console.log(isStrongPassword('Hello World')) // weak password -> returns false


console.log(isStrongPassword('@g@nrV%Uo$B61i6Hhl')) // strong password -> returns true

```