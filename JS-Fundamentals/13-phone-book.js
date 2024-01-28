function processPhoneBook(inputArray) {
    'use strict';

   
    let phoneBook = {};

    
    for (let i = 0; i < inputArray.length; i++) {
        
        let [name, phoneNumber] = inputArray[i].split(' ');

       
        if (phoneBook.hasOwnProperty(name)) {
            phoneBook[name] = phoneNumber;
        } else {
            
            phoneBook[name] = phoneNumber;
        }
    }

    
    for (let name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}
  