
const countWordOccurrences = (str: string, findStr: string) => {
    let strToArray: string[];
    let countStr: number = 0;

    let removeSpacialChar = str.replace(/[^\w\s]/gi, '')
    strToArray = removeSpacialChar.split(" ");


    for (let i: number = 0; i < strToArray.length; i++) {
        if (strToArray[i].toLocaleLowerCase() === findStr.toLocaleLowerCase()) {
            countStr = countStr + 1;
        }
    }

    console.log(countStr);

}

countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");