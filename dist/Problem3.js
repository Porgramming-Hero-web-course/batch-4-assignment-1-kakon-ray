"use strict";
{
    const countWordOccurrences = (str, findStr) => {
        let strToArray;
        let countStr = 0;
        // let removeSpacialChar = str.replace(/[^\w\s]/gi, '')
        strToArray = str.split(" ");
        for (let i = 0; i < strToArray.length; i++) {
            if (strToArray[i].toLocaleLowerCase() === findStr.toLocaleLowerCase()) {
                countStr = countStr + 1;
            }
        }
        return countStr;
    };
    const countValue = countWordOccurrences("I love typescript", "typescript");
    console.log(countValue);
}
