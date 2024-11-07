{

    const countWordOccurrences = (str: string, findStr: string): number => {
        let strToArray: string[];
        let countStr: number = 0;

        // let removeSpacialChar = str.replace(/[^\w\s]/gi, '')


        strToArray = str.split(" ");

        for (let i: number = 0; i < strToArray.length; i++) {
            if (strToArray[i].toLocaleLowerCase() === findStr.toLocaleLowerCase()) {
                countStr = countStr + 1;
            }
        }

        return countStr;

    }

    const countValue = countWordOccurrences("I love typescript", "typescript");
    console.log(countValue);

}