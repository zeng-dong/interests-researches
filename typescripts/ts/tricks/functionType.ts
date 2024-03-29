function createMovieId(name: string, id: number): string {
    return name + id;
}

let xyz: string = "xyz";
function doThings(options: any): void {
    console.log(options.name);
    xyz = options.name + options.id;
}

let newId: string = createMovieId("jedi", 10);

// assign this function to a variable and using the variable to call it
// just like declare a simple number type
let x: number;

// one can declare a function type:
let y: (chars: string, nums: number) => string;
let z: (options: any) => void;

// jsut like one can assign value to number type:
x = 6;

// one can assign function to function type:
y = createMovieId;
z = doThings;

function noParameter(): void {
    console.log("I am getting invoked");
}

let a: () => void;
a = noParameter;
a();

// now we can invoke the function variable:
const yResult = y("jedi", 11);
console.log("y result:  ", yResult);
z({ name: "super dude", id: "_006" });
console.log(xyz);

y = (s: string, n: number) => {
    console.log("y can take an anonymous function too");

    return "hello world: " + "_" + n + "_" + s;
};

console.log(y("fly with", 737));

function doMore(
    s: string,
    n: number,
    fn1: (chars: string, nums: number) => string,
    fn2: (options: any) => void,
) {
    const r = fn1(s, n);
    fn2({ name: s, id: n });
    console.log("r: ", r);
}

console.log("========== passing two functions as parameters ===========");
doMore("holly", 987, y, z);
console.log("xyz: ", xyz);
