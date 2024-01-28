function solve(wordToSearch, textToSearch){
    'use strict';

    const hasWord = textToSearch
    .toLowerCase()
    .split(' ')
    .includes(wordToSearch)

    if (hasWord){
        console.log(wordToSearch)
    } else {
        console.log(`${wordToSearch} not found!`);
    }

}
 