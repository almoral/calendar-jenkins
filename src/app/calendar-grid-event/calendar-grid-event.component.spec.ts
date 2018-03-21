import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarGridEventComponent } from './calendar-grid-event.component';

describe('CalendarEventComponent', () => {
  let component: CalendarGridEventComponent;
  let fixture: ComponentFixture<CalendarGridEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarGridEventComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarGridEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
