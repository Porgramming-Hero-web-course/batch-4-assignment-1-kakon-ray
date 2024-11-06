"use strict";
const removeDuplicates = (array) => {
    return [...new Set(array)];
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
