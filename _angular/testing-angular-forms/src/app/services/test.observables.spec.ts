import { fakeAsync, flush, tick } from '@angular/core/testing';
import { delay, of } from 'rxjs';

describe('testing observables', () => {
  it('should pass as if it is sequential', () => {
    let isSubscribed = false;
    let observable = of(isSubscribed);

    observable.subscribe(() => {
      isSubscribed = true;
    });

    expect(isSubscribed).toBeTrue(); // this passes because this is like sequencial
  });

  it('should not pass when we introduce delay', () => {
    let isSubscribed = false;
    let observable = of(isSubscribed).pipe(delay(1000));

    observable.subscribe(() => {
      isSubscribed = true;
    });

    //expect(isSubscribed).toBeTrue(); // this fails because we introduced a delay
    expect(isSubscribed).toBeFalse();
  });

  it('should pass when we introduce delay and use fakeAsync', fakeAsync(() => {
    let isSubscribed = false;
    let observable = of(isSubscribed).pipe(delay(1000));

    observable.subscribe(() => {
      isSubscribed = true;
    });

    tick(1000); // why flush() or tick() does not work here?
    expect(isSubscribed).toBeTrue();
  }));
});
