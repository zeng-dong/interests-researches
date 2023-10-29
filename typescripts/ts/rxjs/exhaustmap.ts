
// // RxJS v6+
// import { interval } from "rxjs";
// import { mapTo } from "rxjs/operators";

// //emit value every two seconds
// const source = interval(2000);
// //map all emissions to one value
// const example = source.pipe(mapTo("HELLO WORLD!"));
// //output: 'HELLO WORLD!'...'HELLO WORLD!'...'HELLO WORLD!'...
// const subscribe = example.subscribe((val) => console.log(val));

// // RxJS v6+
// import { mapTo } from "rxjs/operators";
// import { interval, merge } from "rxjs";

// //emit every 2.5 seconds
// const first = interval(2500);
// //emit every 2 seconds
// const second = interval(2000);
// //emit every 1.5 seconds
// const third = interval(1500);
// //emit every 1 second
// const fourth = interval(1000);

// //emit outputs from one observable
// const example = merge(
//     first.pipe(mapTo("FIRST!")),
//     second.pipe(mapTo("SECOND!")),
//     third.pipe(mapTo("THIRD")),
//     fourth.pipe(mapTo("FOURTH")),
// );
//output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
//const subscribe = example.subscribe((val) => console.log(val));
// import { interval, merge, of } from "rxjs";
// import { delay, exhaustMap, take } from "rxjs/operators";

// const sourceInterval = interval(1000);
// const delayedInterval = sourceInterval.pipe(delay(10), take(4));

// const exhaust = merge(delayedInterval, of(true))
//     .pipe(exhaustMap((_) => sourceInterval.pipe(take(5))))
//     .subscribe((v) => console.log(v));

// RxJS v6+
// import { interval } from "rxjs";
// import { exhaustMap, tap, take } from "rxjs/operators";

// const firstInterval = interval(1000).pipe(take(10));
// const secondInterval = interval(1000).pipe(take(2));

// const exhaustSub = firstInterval
//     .pipe(
//         exhaustMap((f) => {
//             console.log(`Emission Corrected of first interval: ${f}`);
//             return secondInterval;
//         }),
//     )
//     /*
//                 When we subscribed to the first interval, it starts to emit a values (starting 0).
//                 This value is mapped to the second interval which then begins to emit (starting 0).
//                 While the second interval is active, values from the first interval are ignored.
//                 We can see this when firstInterval emits number 3,6, and so on...

//                   Output:
//                   Emission of first interval: 0
//                   0
//                   1
//                   Emission of first interval: 3
//                   0
//                   1
//                   Emission of first interval: 6
//                   0
//                   1
//                   Emission of first interval: 9
//                   0
//                   1
//               */
//     .subscribe((s) => console.log(s));
