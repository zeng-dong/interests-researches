import { toSignal } from "@angular/core/rxjs-interop";
import { effect, inject } from "@angular/core";
import { HttpClient, HttpXhrBackend } from "@angular/common/http";
import { map, of } from "rxjs";

// export class DataService {
//     //private http = inject(HttpClient);
//     http = new HttpClient(
//         new HttpXhrBackend({
//             build: () => new XMLHttpRequest(),
//         })
//     );
//     URL = "./data.json";

//     //people = toSignal(this.http.get<any>(this.URL).pipe(map((res) => res)));
//     people = this.http.get<any>(this.URL).pipe(map((res) => res));

//     constructor() {
//         // effect((onCleanup) => {
//         //     console.log("people value :", this.people());
//         //     onCleanup(() => {
//         //         console.log("clean up callback triggered");
//         //     });
//         // });

//         this.people.subscribe((x) => console.log(x));
//     }
// }

//const service = new DataService();

// const http = new HttpClient(
//     new HttpXhrBackend({
//         build: () => new XMLHttpRequest(),
//     })
// );
// const URL = "./data.json";

// const people = http.get<any>(URL).pipe(map((res) => res));

// people.subscribe((x) => console.log(x));

const s = toSignal(of(1, 2, 3).pipe(map((x) => x * x)));
console.log(s());
