// RxJS v6.4+
import { of } from "rxjs";
import { takeWhile, filter } from "rxjs/operators";

const source$ = of(true, true, false, true, true, false);

source$.pipe(takeWhile((val) => val !== false, true)).subscribe(console.log);
//source$.pipe(takeWhile((val) => val !== false)).subscribe(console.log);
