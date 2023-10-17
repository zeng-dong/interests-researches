import { combineLatest, delay, forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";

const observable1 = of(1, 2, 3);
const observable2 = of("a", "b", "c", "d");
const observable3 = of(true, false, true, true, false);

forkJoin({
    k1: observable1,
    k2: observable2,
    k3: observable3,
}).subscribe({
    next: (response: any) => {
        console.log(response);
    },
});

console.log("-----------------");

function makeRequest(value: string, delayDuration: number) {
    // simulate http request
    return of(`Complete: ${value}`).pipe(delay(delayDuration));
}

let propOne: string;
let propTwo: string;
let propThree: string;

forkJoin(
    makeRequest("Request One", 2000),
    makeRequest("Request Two", 1000),
    makeRequest("Request Three", 3000),
).subscribe(([res1, res2, res3]) => {
    propOne = res1;
    propTwo = res2;
    propThree = res3;

    console.log(propOne);
    console.log(propTwo);
    console.log(propThree);
});

forkJoin({
    k1: makeRequest("Request One", 2000),
    k2: makeRequest("Request Two", 1000),
    k3: makeRequest("Request Three", 3000),
}).subscribe(({ k1, k2, k3 }) => {
    propOne = k1;
    propTwo = k2;
    propThree = k3;

    console.log("K1:", propOne);
    console.log("K2:", propTwo);
    console.log("K3", propThree);
});
