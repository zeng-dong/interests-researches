import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';
import { SharedService } from './shared.service';

describe('CalcService', () => {
  let service: CalcService;

  it('should multiply two numbers', () => {
    service = new CalcService(new SharedService());
    expect(service.mutiply(2, 3)).toBe(6);
  });

  it('should call the mySharedFunction function', () => {
    //const sharedService = new SharedService();    // how can we avoid this? create a mock like this:

    const sharedService = jasmine.createSpyObj('SharedService', [
      'mySharedFunction',
    ]);

    //spyOn(sharedService, 'mySharedFunction'); // if we do not spy, we get an error: expect a spy, but got Function

    //spyOn(sharedService, 'mySharedFunction').and.callThrough(); // then the function is called

    const service = new CalcService(sharedService);
    service.mutiply(2, 3);
    expect(sharedService.mySharedFunction).toHaveBeenCalled();
  });
});
