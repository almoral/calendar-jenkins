import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarEventListComponent } from './calendar-event-list.component';
import { CalendarEventDateComponent} from '../calendar-event-date/calendar-event-date.component';
import { CalendarEventComponent} from '../calendar-event/calendar-event.component';

describe('CalendarEventListComponent', () => {
  let component: CalendarEventListComponent;
  let fixture: ComponentFixture<CalendarEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalendarEventListComponent,
        CalendarEventDateComponent,
        CalendarEventComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
