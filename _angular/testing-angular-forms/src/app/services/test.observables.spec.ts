import { fakeAsync, flush, tick } from '@angular/core/testing';
import { delay, interval, map, of, take } from 'rxjs';

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

  fit('should do this', fakeAsync(() => {
    let isSubscribed = false;
    let next = 200;

    let observable = interval(1000).pipe(
      delay(0),
      //take(1),
      map(() => {
        next = next + Math.floor(Math.random() * 5);
        return next > 250 ? 222 : next;
      })
    );

    let sub = observable.subscribe((v) => {
      console.log(v);
      isSubscribed = true;
      next = v;
    });

    tick(2000);
    sub.unsubscribe();
    expect(isSubscribed).toBeTrue();
    console.log('next is: ', next);
  }));
});
