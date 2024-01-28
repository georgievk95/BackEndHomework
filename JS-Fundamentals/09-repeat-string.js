function repeatString(string, count) {
    'use strict';

        let repeatedString = '';
        for (let i = 0; i < count; i++) {
            repeatedString += string;
        }
        return repeatedString;
   
}

console.log(repeatString("abc", 3));
console.log(repeatString("String", 2)); 
