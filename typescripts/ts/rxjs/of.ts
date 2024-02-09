import { Observable, debounceTime, delay, of } from "rxjs";

const source = of(function hello() {
    console.log("Hello world");
});

const subscribe = source.subscribe((val) => {
    val();
});

function apiGetTimes(): Observable<any> {
    return of("morning", "afternoon").pipe(delay(0));
}

apiGetTimes().subscribe((x) => console.log("Good " + x));
console.log("Good evening");
