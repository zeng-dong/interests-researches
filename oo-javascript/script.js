display("hello world");


let Person = {
    firstName: '',
    lastName: '',
    age: 0,
    fullName() {
        return `${this.firstName} ${this.lastName}`
    },
};