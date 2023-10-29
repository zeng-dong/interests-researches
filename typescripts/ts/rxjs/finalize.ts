import { interval, finalize, tap, noop, timer } from "rxjs";

let abc = false;
const source = interval(100).pipe(
    finalize(() => {
        console.log("[finalize] Called");
        abc = true;
    }),
    tap({
        next: () => console.log("[next] Called"),
        error: () => console.log("[error] Not called"),
        complete: () => console.log("[tap complete] Not called"),
    }),
);

const sub = source.subscribe({
    next: (x) => console.log(x),
    error: noop,
    complete: () => console.log("[complete] Not called"),
});

console.log("abc before sub: ", abc);
timer(150).subscribe(() => {
    sub.unsubscribe();
    console.log("abc in sub: ", abc);
});
console.log("abc after sub: ", abc);

// results:
// '[next] Called'
// 0
// '[finalize] Called'
