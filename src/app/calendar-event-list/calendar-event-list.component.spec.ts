import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarEventListComponent } from './calendar-event-list.component';

describe('CalendarEventListComponent', () => {
  let component: CalendarEventListComponent;
  let fixture: ComponentFixture<CalendarEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarEventListComponent ]
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
