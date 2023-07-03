import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class CalcService {
  constructor(private shareService: SharedService) {}

  mutiply(a: number, b: number): number {
    this.shareService.mySharedFunction();
    return a * b;
  }
}
