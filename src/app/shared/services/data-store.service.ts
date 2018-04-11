import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/Rx';
import {MdcEventsByDate, MdcEvent} from '../models/mdc-event';
import * as _ from 'lodash';
import {EventService} from './event.service';
import {EventDataService} from './event-data.service';
import {CategoriesDataService} from './categories-data.service';
import {CalendarDataService} from './calendar-data.service';
import {TypesDataService} from './types-data.service';
import {Option} from '../models/option';
import * as moment from 'moment';


@Injectable()
export class DataStoreService {

  constructor(private eventService: EventService,
              private eventDataService: EventDataService,
              private categoriesService: CategoriesDataService,
              private calendarDataService: CalendarDataService,
              private typesService: TypesDataService) {


    this.subscribeTitleFilter();
    this.subscribeCategoriesFilter();
    this.subscribeTypesFilter();
    this.subscribeEvents();
    this.subscribeCalendarsFilter();
    this.getTypes();
    this.getCategories();
    this.getCalendars();
  }

  // observable collection of events.
  private eventsSubject = new BehaviorSubject([]);
  public events$: Observable<MdcEvent[]> = this.eventsSubject.asObservable();

  // observable collection of events grouped by date.
  private eventsByDateSubject = new BehaviorSubject([]);
  public eventsByDate$: Observable<MdcEventsByDate[]> = this.eventsByDateSubject.asObservable();

  // observable filter title.
  private titleFilterSubject = new BehaviorSubject('');
  public titleFilter$: Observable<string> = this.titleFilterSubject.asObservable();

  // observable filter categories.
  private categoriesFilterSubject = new BehaviorSubject([]);
  public categoriesFilter$: Observable<string[]> = this.categoriesFilterSubject.asObservable();

  // observable filter types.
  private typesFilterSubject = new BehaviorSubject([]);
  public typesFilter$: Observable<string[]> = this.typesFilterSubject.asObservable();


  // observable filter calendars. This is the list of filters the user has chosen from the checkboxes.
  private calendarsFilterSubject = new BehaviorSubject([]);
  public calendarsFilter$: Observable<string[]> = this.calendarsFilterSubject.asObservable();


  // observable calendars. This is the list that populates the checkboxes used to filter events by calendar.
  private calendarsSubject = new BehaviorSubject([]);
  public calendars$: Observable<string[]> = this.calendarsSubject.asObservable();


  // observable categories.
  private categoriesSubject = new BehaviorSubject([]);
  public categories$: Observable<string[]> = this.categoriesSubject.asObservable();

  // observable types.
  private typesSubject = new BehaviorSubject([]);
  public types$: Observable<string[]> = this.typesSubject.asObservable();

  /**
   * getEvents fetches all events falling between date:to and
   * date:from, and the state of the store is initialized with
   * the fetched value.
   * @param to - start Date.
   * @param from - end Date.
   */
  getEvents(from: Date, to: Date) {

    const calendars = _.flatMap(this.calendarsSubject.getValue(), (item) => item.value);

    const events$: Observable <MdcEvent[]> = this.eventDataService.getEventsOnCalendars(calendars, from, to);
    events$.subscribe(events => this.setEvents(events));
  }

  getCategories() {
    this.categoriesService.getCategories()
      .subscribe(categories => {
        this.setCategories(categories);
      });
  }

  getTypes() {
    this.typesService.getTypes()
      .subscribe(types => {
        this.setTypes(types);
      });
  }

  getCalendars() {
    this.calendarDataService.getCalendars()
      .subscribe(calendars => {
        this.setCalendars(calendars);
      });
  }


  /**
   * filterEvents does the following:
   * 1. Filter events in the master list - eventsSubject -
   *    using title, categories, types, and calendars.
   * 2. Categorize the result by date.
   * 3. Notify subscribers that the categorized events have changed.
   */
  filterEvents() {

    // filter events in master list.
    const filteredEvents = this.eventService.filterEvents(
      this.eventsSubject.getValue(),
      this.titleFilterSubject.getValue(),
      this.categoriesFilterSubject.getValue(),
      this.typesFilterSubject.getValue(),
      this.calendarsFilterSubject.getValue());

    // categorize events by date.
    const eventsByDate = this.eventService.eventsByDate(filteredEvents);

    // notify subscribers.
    this.eventsByDateSubject.next(_.cloneDeep(eventsByDate));
  }

  filterEventsForDate(date: Date) {

    const filteredEvents = _.filter(this.eventsSubject.getValue(), (events: MdcEvent) => {
      return moment(events.startDate).format('YYYY-MMMM-DD') === moment(date).format('YYYY-MMMM-DD');
    });

    // categorize events by date.
    const eventsByDate = this.eventService.eventsByDate(filteredEvents);

      // return filteredEvents;
    this.eventsByDateSubject.next(_.cloneDeep(eventsByDate));

  }

  setEvents(events: MdcEvent[]) {
    this.eventsSubject.next(_.cloneDeep(events));
  }

  setCategoriesFilter(categories: string[]) {
    this.categoriesFilterSubject.next(categories);
  }

  setTypesFilter(types: string[]) {
    this.typesFilterSubject.next(types);


  }

  setTitleFilter(title: string) {
    this.titleFilterSubject.next(title);
  }

  setCalendarsFilter(calendars: string[]) {
    this.calendarsFilterSubject.next(calendars);
  }


  setCalendars(calendars: Option[]) {
    this.calendarsSubject.next(calendars);
  }

  /**
   * setCategories notifies those observers listening for new emission
   * of categories$.
   * @param newCategories - The collection of object[] representing
   * the master copy of categories which will be emitted at categories$
   */
  setCategories(newCategories: Option[]) {
    this.categoriesSubject.next(_.cloneDeep(newCategories));
  }
  /**
   * setTypes notifies those observers listening for new emission
   * of types$.
   * @param newTypes - The collection of object[] representing
   * the master copy of types which will be emitted at types$
   */
  setTypes(newTypes: Option[]) {
    this.typesSubject.next(_.cloneDeep(newTypes));
  }

  subscribeTitleFilter() {
    this.titleFilter$.subscribe((title) => this.filterEvents());
  }

  subscribeCategoriesFilter() {
    this.categoriesFilter$.subscribe((categories) => this.filterEvents());
  }

  subscribeTypesFilter() {
    this.typesFilter$.subscribe((types) => this.filterEvents());
  }

  subscribeCalendarsFilter() {
    this.calendarsFilter$.subscribe((calendars) => this.filterEvents());
  }

  subscribeEvents() {
    this.events$.subscribe((events) => this.filterEvents());
  }


}
