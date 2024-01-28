function occurrences(text, word) {
    'use strict';

    let words = text.split(' ');
    let counter = 0;

   for (let i = 0; i < words.length; i ++) {
        if (words[i] === word){
            counter += 1;
        }
   }
    console.log(counter);
}

occurrences('This is a word and it also is a sentence', 'is'); // Output: 2
occurrences('softuni is a great place for learning new programming languages', 'softuni'); // Output: 1
