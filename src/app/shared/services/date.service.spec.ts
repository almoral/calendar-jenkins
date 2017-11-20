import { TestBed, inject } from '@angular/core/testing';

import { DateService } from './date.service';

describe('DateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateService]
    });
  });

  it('should return the number of days in a given month', inject([DateService], (service: DateService) => {
    let numberOfDays1: number[] = service.getNumberOfDays('2014', 'January');
    let numberOfDays2: number[] = service.getNumberOfDays('2016', 'February');
    let numberOfDays3: number[] = service.getNumberOfDays('2017', 'February');
    expect(numberOfDays1.length).toBe(31);
    expect(numberOfDays2.length).toBe(29);
    expect(numberOfDays3.length).toBe(28);
  }));


});
