import { debounceTime, delay, of } from "rxjs";

const source = of(function hello() {
    console.log("Hello world");
});

const subscribe = source.subscribe((val) => {
    val();
});

of("morning", "afternoon")
    .pipe(delay(0))
    .subscribe((x) => console.log("Good " + x));
console.log("Good evening");
