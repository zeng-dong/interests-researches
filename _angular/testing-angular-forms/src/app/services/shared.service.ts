import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  mySharedFunction(): void {
    console.log('mySharedFunction called');
  }
}
