function solve(passwordValidator){

    'use strict';

    const errors = []

    if (passwordValidator.length < 6 && passwordValidator > 10){
        errors.push('Password must be between 6 and 10 characters');
    }
    const regexOnlyLettersAndDigits = /^[A-Za-z0-9]+$/

    if (!passwordValidator.match(regexOnlyLettersAndDigits)) {
        errors.push('Password must consist only of letters and digits')
    }

    if (/(\d.*\d)/.test(passwordValidator)) {
        errors.push('Password must have at least 2 digits')
    }

    if (errors.length === 0){
        console.log('Password is valid')
    } else {
        errors.forEach((error) => console.log(error));
    }
}