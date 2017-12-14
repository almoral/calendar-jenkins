import { TestBed, inject } from '@angular/core/testing';

import { CalendarDataService } from './calendar-data.service';

describe('DepartmentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarDataService]
    });
  });

  it('should be created', inject([CalendarDataService], (service: CalendarDataService) => {
    expect(service).toBeTruthy();
  }));
});
