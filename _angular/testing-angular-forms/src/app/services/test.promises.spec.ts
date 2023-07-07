import { fakeAsync, flush, tick } from '@angular/core/testing';

describe('testing promises', () => {
  /// this should fail because it is a async operation
  xit('should test the promise, fail because promise is asynchrouse', () => {
    let counter = 0;

    Promise.resolve().then(() => {
      counter++;
    });

    expect(counter).toBe(1); // when this is executed, counter++ is still waiting in queue
  });

  it('should test the promise, using fakeAsync', fakeAsync(() => {
    let counter = 0;

    Promise.resolve().then(() => {
      counter++;
    });

    flush();
    expect(counter).toBe(1);
  }));

  it('should test the promise, timeouts', fakeAsync(() => {
    let counter = 0;

    setTimeout(() => {
      counter += 2;
    }, 2000);

    setTimeout(() => {
      counter += 3;
    }, 3000);

    Promise.resolve().then(() => {
      counter++;
    });

    flush();
    expect(counter).toBe(6);
  }));

  /// this fails because promise code is executed before set timers
  /// we can see this with the display orders of the console logs
  /// even if we set time to 0, promise is going to be executed first:
  ///  setTimeout(() => {       console.log('1st set timeout');      counter += 2;    }, 0);
  it('should test the promise, timeouts - fail', fakeAsync(() => {
    let counter = 0;

    setTimeout(() => {
      console.log('1st set timeout');
      counter += 2;
    }, 2000); // even we set time to 0, promise is still executed before this setTimeout

    setTimeout(() => {
      console.log('2nd set timeout');
      counter += 3;
    }, 3000);

    Promise.resolve().then(() => {
      console.log('promise');
      counter++;
    });

    //flush();
    tick(2000);
    expect(counter).toBe(2);
  }));

  it('should test the promise, timeouts - pass', fakeAsync(() => {
    let counter = 0;

    setTimeout(() => {
      console.log('1st set timeout');
      counter += 2;
    }, 2000); // even we set time to 0, promise is still executed before this setTimeout

    setTimeout(() => {
      console.log('2nd set timeout');
      counter += 3;
    }, 3000);

    Promise.resolve().then(() => {
      console.log('promise');
      counter++;
    });

    tick(2000);
    expect(counter).toBe(3);

    tick(3000);
    expect(counter).toBe(6);
  }));
});
