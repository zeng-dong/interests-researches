import { Observable, debounceTime, delay, of, take, takeLast } from "rxjs";

const source = of(function hello() {
    console.log("Hello world");
});

const subscribe = source.subscribe((val) => {
    val();
});

function apiGetTimes(): Observable<any> {
    return of("morning", "afternoon").pipe(delay(20));
}

apiGetTimes().subscribe((x) => console.log("Good " + x));
console.log("Good evening");

let result: any = null;
apiGetTimes()
    .pipe(take(1))
    .subscribe((x) => (result = x));

try {
    console.log(result.trim() + ", Sir");
} catch (e) {
    console.error(e);
}

setTimeout(() => {
    console.log(result.trim() + ", Sir");
}, 1);


