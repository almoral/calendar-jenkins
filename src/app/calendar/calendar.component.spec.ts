import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MDCCalendarComponent } from './calendar.component';
import { CalendarEventListComponent } from '../calendar-event-list/calendar-event-list.component';
import { CalendarEventDateComponent} from '../calendar-event-date/calendar-event-date.component';
import { CalendarEventComponent} from '../calendar-event/calendar-event.component';
import { CalendarHeaderComponent } from '../calendar-header/calendar-header.component';
import { CalendarFilterContainerComponent} from '../calendar-filter-container/calendar-filter-container.component';
import { CalendarDateFilterComponent} from '../calendar-date-filter/calendar-date-filter.component';
import { CalendarFilterByCalendarComponent} from '../calendar-filter-by-calendar/calendar-filter-by-calendar.component';
import { CalendarFilterByCategoryComponent} from '../calendar-filter-by-category/calendar-filter-by-category.component';
import { CalendarFilterByTitleComponent} from '../calendar-filter-by-title/calendar-filter-by-title.component';

describe('MDCCalendarComponent', () => {
  let component: MDCCalendarComponent;
  let fixture: ComponentFixture<MDCCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MDCCalendarComponent,
        CalendarEventListComponent,
        CalendarEventDateComponent,
        CalendarEventComponent,
        CalendarHeaderComponent,
        CalendarFilterContainerComponent,
        CalendarDateFilterComponent,
        CalendarFilterByCalendarComponent,
        CalendarFilterByCategoryComponent,
        CalendarFilterByTitleComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MDCCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
