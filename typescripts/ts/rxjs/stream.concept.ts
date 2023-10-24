let counter = 0;
setInterval(() => {
    console.log(counter++);
}, 1000);

setTimeout(() => {
    console.log("I am one and done: ", counter);
}, 3000);
