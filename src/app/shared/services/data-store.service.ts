import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/Rx';
import {MdcEventsByDate, MdcEvent} from '../models/mdc-event';
import * as _ from 'lodash';
import {EventService} from './event.service';
import {EventDataService} from './event-data.service';
import {CategoriesService} from './categories.service';
import {environment} from '../../../environments/environment';


@Injectable()
export class DataStoreService {


  constructor(private eventService: EventService,
              private eventDataService: EventDataService,
              private categoriesService: CategoriesService) {
    // this.initializeEvents(TestEvents.testEvents);

    //TODO: intitial dates should come from some configuration.
    this.setCalendars(environment.calendars);
    this.getCategories();
    this.subscribeTitleFilter();

    this.subscribeCategoriesFilter();
    // this.subscribeCategories();
    this.subscribeEvents();
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


  // observable filter calendars.
  private calendarsFilterSubject = new BehaviorSubject([]);
  public calendarsFilter$: Observable<string[]> = this.calendarsFilterSubject.asObservable();


  // observable calendars.
  private calendarsSubject = new BehaviorSubject([]);
  public calendars$: Observable<string[]> = this.calendarsSubject.asObservable();

  // observable categories.
  private categoriesSubject = new BehaviorSubject([]);
  public categories$: Observable<string[]> = this.categoriesSubject.asObservable();

  /**
   * initializeEvents notifies those observers listening for new emision
   * of events$ and eventsByDate$.
   * eventsByDate$ will be derived from events$. At this initial point
   * both events$ and eventsByDate$ are in sync.
   * @param newEvents - The collection of MdcEvent[] representing
   * the master copy of events which will be emited at events$ and
   * its eventsByDate representation at eventsByDate$ .
   */
  initializeEvents(newEvents: MdcEvent[]) {
    this.eventsSubject.next(_.cloneDeep(newEvents));
  }


  /** TODO: Update this comment
   * initializeCategories notifies those observers listening for new emission
   * of categories$.
   * @param newCategories - The collection of object[] representing
   * the master copy of categories which will be emitted at categories$
   */
  initializeCategories(newCategories: string[]) {
    this.categoriesSubject.next(_.cloneDeep(newCategories));
  }



  /**
   * getEvents fetches all events falling between date:to and
   * date:from, and the state of hte store is initialized with
   * the fetched value.
   * @param to - start Date.
   * @param from - end Date.
   */
  getEvents(from: Date, to: Date) {
    // TODO: remove hardcoded calendar by configured set of calendars
    let events$: Observable <MdcEvent[]> = this.eventDataService.getEventsOnCalendars(this.calendarsSubject.getValue(), from, to);
    events$.subscribe(events => this.setEvents(events));
    // TODO: what happens if an error comes. Who should handle displaying something ?
  }

  getCategories() {
    const categories$: Observable<string[]> = this.categoriesService.getCategories();
    categories$.subscribe(categories => {
        this.initializeCategories(categories);
      });
  }


  /**
   * filterEvents does the following:
   * 1. Filter events in the master list - eventsSubject -
   *    using title, categories and calendars.
   * 2. Categorize the result by date.
   * 3. Notify subscribers that the categorized events have changed.
   */
  filterEvents(){
    // filter events in master list.
    let filteredEvents = this.eventService.filterEvents(
      this.eventsSubject.getValue(),
      this.titleFilterSubject.getValue(),
      this.categoriesFilterSubject.getValue(),
      this.calendarsFilterSubject.getValue());

    // categorize events by date.
    let eventsByDate = this.eventService.eventsByDate(filteredEvents);

    // notify subscribers.
    this.eventsByDateSubject.next(_.cloneDeep(eventsByDate));
  }

  setEvents(events: MdcEvent[]) {
    this.eventsSubject.next(_.cloneDeep(events));
  }

  setCategoriesFilter(categories: string[]) {
    this.categoriesFilterSubject.next(categories);

  }

  setTitleFilter(title: string) {
    this.titleFilterSubject.next(title);
  }

  setCalendarsFilter(calendars: string[]) {
    this.calendarsFilterSubject.next(calendars);
  }


  setCalendars(calendars: string[]) {
    this.calendarsSubject.next(calendars);
  }

  subscribeTitleFilter() {
    this.titleFilter$.subscribe((title) => this.filterEvents());
  }

  subscribeCategoriesFilter() {
    this.categoriesFilter$.subscribe((categories) => this.filterEvents());
  }

  subscribeCalendarsFilter() {
    this.calendarsFilter$.subscribe((calendars) => this.filterEvents());
  }

  subscribeEvents() {
    this.events$.subscribe((events) => this.filterEvents());
  }


}
