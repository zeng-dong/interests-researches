import { combineLatest, forkJoin, of } from "rxjs";

const observable1 = of(1, 2, 3);
const observable2 = of("a", "b", "c", "d");
const observable3 = of(true, false, true, true, false);

combineLatest([observable1, observable2]).subscribe({
    next: (response: any) => {
        console.log(response);
    },
});

console.log("-----------------");

combineLatest([observable1, observable2, observable3]).subscribe({
    next: (response: any) => {
        console.log(response);
    },
});

console.log("-----------------");

forkJoin({
    k1: observable1,
    k2: observable2,
    k3: observable3,
}).subscribe({
    next: (response: any) => {
        console.log(response);
    },
});
