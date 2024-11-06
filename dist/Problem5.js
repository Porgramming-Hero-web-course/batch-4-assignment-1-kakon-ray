"use strict";
const getProperty = (param, key) => {
    return param[key];
};
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
