import { TestBed, inject } from '@angular/core/testing';

import { EventsDataService } from './events-data.service';

describe('EventsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventsDataService]
    });
  });

  it('should be created', inject([EventsDataService], (service: EventsDataService) => {
    expect(service).toBeTruthy();
  }));
});
