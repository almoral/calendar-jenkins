import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarFilterByCalendarComponent } from './calendar-filter-by-calendar.component';

describe('CalendarFilterByDepartmentComponent', () => {
  let component: CalendarFilterByCalendarComponent;
  let fixture: ComponentFixture<CalendarFilterByCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarFilterByCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarFilterByCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
