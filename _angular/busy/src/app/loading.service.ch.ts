import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingChService {
  private isLoading$ = new BehaviorSubject<boolean>(false);
  private message$ = new BehaviorSubject<string>('loading ...');

  constructor() {}

  show(): void {
    this.isLoading$.next(true);
  }

  hide(): void {
    this.isLoading$.next(false);
  }

  setMessage(message: string): void {
    this.message$.next(message);
  }

  get isLoading(): BehaviorSubject<boolean> {
    return this.isLoading$;
  }

  get message(): BehaviorSubject<string> {
    return this.message$;
  }
}
