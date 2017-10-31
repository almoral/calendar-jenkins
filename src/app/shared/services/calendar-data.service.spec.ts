import { TestBed, inject } from '@angular/core/testing';


import {HttpClientTestingModule} from "@angular/common/http/testing";
import {CalendarDataService} from "./calendar-data.service";
import {ConfigurationService} from "./configuration.service";


describe('CalendarDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarDataService, ConfigurationService],
      imports:[HttpClientTestingModule]
    });
  });


  it('should be created', inject([CalendarDataService], (service: CalendarDataService) => {
    expect(service).toBeTruthy();
  }));


});
