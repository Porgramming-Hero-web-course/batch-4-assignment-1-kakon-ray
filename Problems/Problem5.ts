{


    const getProperty = <T, Q extends keyof T>(param: T, key: Q) => {
        return param[key];
    }

    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));

}