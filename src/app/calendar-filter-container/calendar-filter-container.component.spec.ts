import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarFilterContainerComponent } from './calendar-filter-container.component';
import { CalendarDateFilterComponent} from '../calendar-date-filter/calendar-date-filter.component';
import { CalendarFilterByDepartmentComponent} from '../calendar-filter-by-department/calendar-filter-by-department.component';
import { CalendarFilterByTypeComponent} from '../calendar-filter-by-type/calendar-filter-by-type.component';
import { CalendarSearchBoxComponent} from '../calendar-search-box/calendar-search-box.component';

describe('CalendarFilterContainerComponent', () => {
  let component: CalendarFilterContainerComponent;
  let fixture: ComponentFixture<CalendarFilterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
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
    fixture = TestBed.createComponent(CalendarFilterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
