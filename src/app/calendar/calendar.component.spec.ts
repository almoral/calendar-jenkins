import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarComponent } from './calendar.component';
import { CalendarEventListComponent } from '../calendar-event-list/calendar-event-list.component';
import { CalendarEventDateComponent} from '../calendar-event-date/calendar-event-date.component';
import { CalendarEventComponent} from '../calendar-event/calendar-event.component';
import { CalendarHeaderComponent } from '../calendar-header/calendar-header.component';
import { CalendarFilterContainerComponent} from '../calendar-filter-container/calendar-filter-container.component';
import { CalendarDateFilterComponent} from '../calendar-date-filter/calendar-date-filter.component';
import { CalendarFilterByDepartmentComponent} from '../calendar-filter-by-department/calendar-filter-by-department.component';
import { CalendarFilterByTypeComponent} from '../calendar-filter-by-type/calendar-filter-by-type.component';
import { CalendarSearchBoxComponent} from '../calendar-search-box/calendar-search-box.component';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
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
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
