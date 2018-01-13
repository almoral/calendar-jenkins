import { TestBed, inject } from '@angular/core/testing';
import { DataStoreService } from './data-store.service';
import { DateService } from './date.service';
import {EventService} from './event.service';
import {EventDataService} from './event-data.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ConfigurationService} from './configuration.service';
import {CategoriesDataService} from './categories-data.service';
import {CalendarDataService} from './calendar-data.service';

describe('DateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DateService,
        DataStoreService,
        EventService,
        EventDataService,
        HttpClientTestingModule,
        ConfigurationService,
        CategoriesDataService,
        CalendarDataService
      ]
      ,
      imports: [HttpClientTestingModule]
    });
  });

  it('should return an array with the length equal to the number passed in', inject([DateService], (service: DateService) => {
      let numberOfDays = service.generateDaysInMonth(30);
      expect(numberOfDays.length).toBe(30);
    }));

  it('should return the number of days in a given month', inject([DateService, DataStoreService], (service: DateService, dataStoreService: DataStoreService) => {
    let numberOfDays1: string[] = service.getNumberOfDays('2014', 'January');
    expect(numberOfDays1.length).toBe(31);
  }));

  it('should return the correct number of days in a given month', inject([DateService], (service: DateService) => {
    let numberOfDays1: string[] = service.getNumberOfDays('2014', 'November');
    expect(numberOfDays1.length).toBe(30);
  }));

  it('should handle leap year correctly', inject([DateService], (service: DateService) => {
    let numberOfDays2: string[] = service.getNumberOfDays('2016', 'February');
    expect(numberOfDays2.length).toBe(29);
  }));

  it('should handle non leap years correctly', inject([DateService], (service: DateService) => {
    let numberOfDays2: string[] = service.getNumberOfDays('2017', 'February');
    expect(numberOfDays2.length).toBe(28);
  }));

  it('should only call filterByDate when searching by a single date', inject([DateService], (service: DateService) => {
    service.setYear('2017');
    service.setMonth('October');
    service.setDay('3');
    const byDate = spyOn(service, 'filterByDate');
    const byMonth = spyOn(service, 'filterByMonth');
    service.filterEventsByDate();
    expect(byDate.calls.any()).toBe(true, 'filterByDate called');
    expect(byMonth.calls.any()).toBe(false, 'filterByMonth not called');
  }));


  it('should only call filterByMonth when searching by a month', inject([DateService], (service: DateService) => {
    service.setYear('2017');
    service.setMonth('October');
    service.setDay('');
    const byDate = spyOn(service, 'filterByDate');
    const byMonth = spyOn(service, 'filterByMonth');
    service.filterEventsByDate();
    expect(byMonth.calls.any()).toBe(true, 'filterByMonth called');
    expect(byDate.calls.any()).toBe(false, 'filterByDate not called');
  }));

});
