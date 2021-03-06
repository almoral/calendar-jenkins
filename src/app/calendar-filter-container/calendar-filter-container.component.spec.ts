import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarFilterContainerComponent } from './calendar-filter-container.component';
import { CalendarDateFilterComponent} from '../calendar-date-filter/calendar-date-filter.component';
import { CalendarFilterByCalendarComponent} from '../calendar-filter-by-calendar/calendar-filter-by-calendar.component';
import { CalendarFilterByCategoryComponent} from '../calendar-filter-by-category/calendar-filter-by-category.component';
import { CalendarFilterByTitleComponent} from '../calendar-filter-by-title/calendar-filter-by-title.component';

describe('CalendarFilterContainerComponent', () => {
  let component: CalendarFilterContainerComponent;
  let fixture: ComponentFixture<CalendarFilterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
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
    fixture = TestBed.createComponent(CalendarFilterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
