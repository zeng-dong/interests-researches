let number: number = 30;
console.log("number: ", number);
console.warn("warn number: ", number);
console.error("error number: ", number);

for (let i = 0; i < 100; i++) {
    console.log(i);
    if (i % 2 === 0) {
        console.log("   it is even");
    } else {
        console.log("   it is odd");
    }
}
