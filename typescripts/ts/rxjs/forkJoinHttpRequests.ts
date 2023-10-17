import { combineLatest, delay, forkJoin, of } from "rxjs";

function makeRequest(value: any, delayDuration: number) {
    // simulate http request
    return of(value).pipe(delay(delayDuration));
}

let propOne: any;
let propTwo: any;
let propThree: any;

forkJoin({
    k1: makeRequest({ isSuccess: true, id: 99, name: "AP" }, 2000),
    k2: makeRequest(
        {
            isSuccess: true,
            errors: null,
            messages: ["hello", "texas"],
            location: { state: "tx", city: "ho" },
        },
        1000,
    ),
    k3: makeRequest("Request Three", 3000),
}).subscribe(({ k1, k2, k3 }) => {
    propOne = k1;
    propTwo = k2;
    propThree = k3;

    console.log("K1:", propOne);
    console.log("K2:", propTwo);
    console.log("K2:", propTwo.messages);
    console.log("K2:", propTwo.location);
    console.log("K3:", propThree);
});
