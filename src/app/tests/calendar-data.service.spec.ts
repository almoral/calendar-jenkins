import { TestBed, inject } from '@angular/core/testing';

import { CalendarDataService } from '../shared/services/calendar-data.service';

describe('CalendarDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarDataService]
    });
  });

  it('should be created', inject([CalendarDataService], (service: CalendarDataService) => {
    expect(service).toBeTruthy();
  }));
});
