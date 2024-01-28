function solve(words, template){
    'use strict';

    const separatedWords = words.split(', ')
    const templateWords = template.split(' ')

    let result = '';

    for (const templatedWord of templateWords ){
        if (templatedWord[0] === '*'){
            const correspondindWord = separatedWords.find(x => x.length === templatedWord.length)
            result += `${correspondindWord} `
        } else {
            result += `${templatedWord} `
        }
        
    }
    console.log(result)
}