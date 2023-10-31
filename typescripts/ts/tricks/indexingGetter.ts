class Person {
    get name() {
        return "Hello World";
    }
}

const person = new Person();
const index: string = "name";
const value = person[index as keyof Person];
console.log("value from indexed property: ", value);
