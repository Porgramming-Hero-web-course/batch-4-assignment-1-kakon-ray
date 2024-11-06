const sumArray = (array: number[]) => {
    let arrayCount = 0;
    let i:number;


    for(i=0;i<array.length;i++){
        arrayCount = arrayCount + array[i];
    }

    return arrayCount;
}


// Sample Input:
console.log(sumArray([1, 2, 3, 4, 5]));
