import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalcService {
  constructor() {}

  mutiply(a: number, b: number): number {
    return a * b;
  }
}
