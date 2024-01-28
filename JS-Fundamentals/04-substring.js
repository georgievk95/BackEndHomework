function substring(string, startNum, count) {
    'use strict';

    let result = string.substring(startNum, startNum + count);

    console.log(result);
}

substring('ASentence', 1, 8);
substring('SkipWord', 4, 7);