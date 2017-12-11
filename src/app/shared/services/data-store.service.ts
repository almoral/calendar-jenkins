import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/Rx';
import {MdcEventsByDate, MdcEvent} from '../models/mdc-event';
import * as _ from 'lodash';
import {EventService} from './event.service';
import {EventDataService} from './event-data.service';
import {CategoriesService} from './categories.service';
import {DepartmentsService} from './departments.service';


@Injectable()
export class DataStoreService {

  constructor(private eventService: EventService,
              private eventDataService: EventDataService,
              private categoriesService: CategoriesService,
              private departmentsService: DepartmentsService) {
    // this.initializeEvents(TestEvents.testEvents);

    //TODO: intitial dates should come from some configuration.
    this.getEvents(new Date('11/1/2016'), new Date('12/25/2017'));
    this.getCategories();
    this.getDepartments();
    this.subscribeTitle();
    this.subscribeCategoriesFilter();
    this.subscribeEvents();
  }

  // observable collection of events.
  private eventsSubject = new BehaviorSubject([]);
  public events$: Observable<MdcEvent[]> = this.eventsSubject.asObservable();

  // observable collection of events grouped by date.
  private eventsByDateSubject = new BehaviorSubject([]);
  public eventsByDate$: Observable<MdcEventsByDate[]> = this.eventsByDateSubject.asObservable();

  // observable filter title.
  private titleSubject = new BehaviorSubject('');
  private title$: Observable<string> = this.titleSubject.asObservable();

  // observable filter categories.
  private categoriesFilterSubject = new BehaviorSubject([]);
  private categoriesFilter$: Observable<string[]> = this.categoriesFilterSubject.asObservable();

  // observable categories.
  private categoriesSubject = new BehaviorSubject([]);
  public categories$: Observable<string[]> = this.categoriesSubject.asObservable();

  // observable filter departments.
  private departmentsFilterSubject = new BehaviorSubject([]);
  private departmentsFilter$: Observable<string[]> = this.departmentsFilterSubject.asObservable();

  // observable departments.
  private departmentsSubject = new BehaviorSubject([]);
  public departments$: Observable<string[]> = this.departmentsSubject.asObservable();

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

  /** TODO: Update this comment
   * initializeDepartments notifies those observers listening for new emission
   * of categories$.
   * @param newDepartments - The collection of object[] representing
   * the master copy of departments which will be emitted at departments$
   */
  initializeDepartments(newDepartments: string[]) {
    this.departmentsSubject.next(_.cloneDeep(newDepartments));
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
    let events$: Observable <MdcEvent[]> = this.eventDataService.getEventsOnCalendar('CalProof2', from, to);
    events$.subscribe(events => this.initializeEvents(events));
    // TODO: what happens if an error comes. Who should handle displaying something ?
  }

  getCategories() {
    const categories$: Observable<string[]> = this.categoriesService.getCategories();
    categories$.subscribe(categories => {
        this.initializeCategories(categories);
      });
  }

  getDepartments() {
    const departments$: Observable<string[]> = this.departmentsService.getDepartments();
    departments$.subscribe(departments => {
      this.initializeDepartments(departments);
    });
  }



  filterEvents() {

    // filter events master list.
    let filteredEvents = this.eventService.filterEvents(
      this.eventsSubject.getValue(),
      this.titleSubject.getValue(),
      this.categoriesFilterSubject.getValue());

    // categorize events by date.
    let eventsByDate = this.eventService.eventsByDate(filteredEvents);

    // refresh subscribers
    this.eventsByDateSubject.next(_.cloneDeep(eventsByDate));
  }


  filterEventsByTitle(title: string) {
    let eventsByDate = this.eventService.eventsByDate(
      this.eventService.filterEventsByTitle(
        this.eventsSubject.getValue(), title));

    this.eventsByDateSubject.next(_.cloneDeep(eventsByDate));

  }

  setTitle(title: string) {
    this.titleSubject.next(title);
  }

  subscribeTitle() {
    this.title$.subscribe((title) => this.filterEvents());
  }


  setCategoriesFilter(categories: string[]) {
    this.categoriesFilterSubject.next(categories);
  }

  subscribeCategoriesFilter() {
    this.categoriesFilter$.subscribe((categories) => this.filterEvents());
  }

  subscribeDepartmentsFilter(departments: string[]) {
    this.departmentsFilterSubject.next(departments);
  }

  subscribeEvents() {
    this.events$.subscribe((events) => this.filterEvents());
  }


}
