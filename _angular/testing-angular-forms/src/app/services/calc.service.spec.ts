import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';
import { SharedService } from './shared.service';

describe('CalcService', () => {
  let sharedService: SharedService;
  let calcService: CalcService;

  // beforeEach(() => {
  //   // service = new CalcService(new SharedService()); // instead new up, we can use TestBed:
  //   TestBed.configureTestingModule({
  //     providers: [CalcService, SharedService],
  //   });
  //   sharedService = TestBed.inject(SharedService);
  //   calcService = TestBed.inject(CalcService);
  // });

  beforeEach(() => {
    sharedService = jasmine.createSpyObj('SharedService', ['mySharedFunction']);

    TestBed.configureTestingModule({
      providers: [
        CalcService,
        { provide: SharedService, useValue: sharedService },
      ],
    });

    sharedService = TestBed.inject(SharedService);
    calcService = TestBed.inject(CalcService);
  });

  it('should multiply two numbers', () => {
    expect(calcService.mutiply(2, 3)).toBe(6);
  });

  it('should add two numbers', () => {
    expect(calcService.add(2, 3)).toBe(5);
  });

  it('should call the mySharedFunction function', () => {
    calcService.mutiply(2, 3);
    expect(sharedService.mySharedFunction).toHaveBeenCalled();
  });
});
