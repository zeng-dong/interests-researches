import { signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { of } from "rxjs";
import { map } from "rxjs/operators";

console.log("hello world");

const s = signal<string>("hello signals");

console.log(s());

of(1, 2, 3)
    .pipe(map((x) => x * x))
    .subscribe((v) => console.log(`value: ${v}`));
