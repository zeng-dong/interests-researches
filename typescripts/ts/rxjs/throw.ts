import { finalize, throwError } from "rxjs";

//emits an error with specified value on subscription
// this is old syntax: const source = throwError('This is an error!');
// this is new syntax:
const source = throwError(() => new Error("This is an error in new syntax!"));
//output: 'Error: This is an error!'

let hello = "finalize";
const subscribe = source
    .pipe(
        finalize(() => {
            console.log(`hello ${hello}`);
            hello = "world";
        }),
    )
    .subscribe({
        next: (val) => console.log(val),
        complete: () => console.log("Complete!"),
        error: (val) => console.log(`Error: ${val}`),
    });

console.log(`hello ${hello}`);
