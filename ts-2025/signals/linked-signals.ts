import { linkedSignal, signal } from "@angular/core";

const source = signal<number>(1);

const target = linkedSignal<number, string>({
    source: source,
    computation: (newValue, previous) => {
        if (newValue % 2 === 0) return "hello even";
        return "hello odd";
    },
});

console.log(target());

source.set(11);
console.log("at 11: ", target());

source.set(22);
console.log("at 22: ", target());
