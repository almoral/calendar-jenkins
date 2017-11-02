import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarEventDateComponent } from './calendar-event-date.component';
import { CalendarEventComponent} from '../calendar-event/calendar-event.component';

describe('CalendarEventDateComponent', () => {
  let component: CalendarEventDateComponent;
  let fixture: ComponentFixture<CalendarEventDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalendarEventDateComponent,
        CalendarEventComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEventDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
