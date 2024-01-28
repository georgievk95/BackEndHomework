function censoredText(text, specialWord) {
    'use strict';

   
    function repeat(str, count) {
        return '*'.repeat(count);
    }

    
    while (text.includes(specialWord)) {
        text = text.replace(specialWord, repeat('*', specialWord.length));
    }

    return text;
}


const result = censoredText('A small sentence with some words', 'small');
console.log(result); 
