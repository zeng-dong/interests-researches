import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';

describe('CalcService', () => {
  let service: CalcService;

  it('should multiply two numbers', () => {
    service = new CalcService();
    expect(service.mutiply(2, 3)).toBe(6);
  });
});
