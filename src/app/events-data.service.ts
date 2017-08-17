import { Injectable } from '@angular/core';
import { CalendarDataService } from './calendar-data.service';


@Injectable()
export class EventsDataService {

  constructor(private calendarDataService: CalendarDataService) { }

  public getEventsFromCalendar(){
    this.calendarDataService.getEvents().subscribe((events: Array<any>) => {
      console.log('Returned Events: ', events);
    })
  }

}
