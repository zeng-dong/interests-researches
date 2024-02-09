// function wrapper(
//     a: number,
//     b: number,
//     // 👇️ function parameter
//     doMath: (a: number, b: number) => number,
// ) {
//     return doMath(a, b);
// }

// // 👇️ Define a function that matches
// // expected parameter type
// function sum(a: number, b: number) {
//     return a + b;
// }

// console.log(wrapper(10, 20, sum)); // 👉️ 30

// // ---------------------------------------------

// // 👇️ Define another function that matches
// // expected parameter type
// function multiply(a: number, b: number) {
//     return a * b;
// }

// console.log(wrapper(10, 20, multiply));

type LogFunction = ({
    name,
    country,
}: {
    name: string;
    country: string;
}) => void;

function wrapper(obj: { name: string; country: string }, logger: LogFunction) {
    logger(obj);
}

const logger: LogFunction = (obj) => {
    console.log(obj);
};

wrapper({ name: "Bobby", country: "Chile" }, logger);

type NoParamFunction = () => void;
function mylog() {
    console.log("I am logging");
}

function usingNoParamFunction(name: string, func: NoParamFunction) {
    console.log("name is ", name);
    func();
}

usingNoParamFunction("world", mylog);``
