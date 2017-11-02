import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { CalendarEventListComponent } from '../calendar-event-list/calendar-event-list.component';
import { CalendarEventDateComponent} from '../calendar-event-date/calendar-event-date.component';
import { CalendarEventComponent} from '../calendar-event/calendar-event.component';
import { CalendarHeaderComponent } from '../calendar-header/calendar-header.component';
import { CalendarFilterContainerComponent} from '../calendar-filter-container/calendar-filter-container.component';
import { CalendarDateFilterComponent} from '../calendar-date-filter/calendar-date-filter.component';
import { CalendarFilterByDepartmentComponent} from '../calendar-filter-by-department/calendar-filter-by-department.component';
import { CalendarFilterByTypeComponent} from '../calendar-filter-by-type/calendar-filter-by-type.component';
import { CalendarSearchBoxComponent} from '../calendar-search-box/calendar-search-box.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CalendarComponent,
        CalendarEventListComponent,
        CalendarEventDateComponent,
        CalendarEventComponent,
        CalendarHeaderComponent,
        CalendarFilterContainerComponent,
        CalendarDateFilterComponent,
        CalendarFilterByDepartmentComponent,
        CalendarFilterByTypeComponent,
        CalendarSearchBoxComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  //Removed the other tests because they didn't apply. We're not naming our app 'app' and we're only using an H1 when this component lives by itself.
});
