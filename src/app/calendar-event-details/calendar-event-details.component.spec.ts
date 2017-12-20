import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarEventDetailsComponent } from './calendar-event-details.component';

describe('CalendarEventDetailsComponent', () => {
  let component: CalendarEventDetailsComponent;
  let fixture: ComponentFixture<CalendarEventDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarEventDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
