import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDateFilterComponent } from './calendar-date-filter.component';

describe('CalendarDateFilterComponent', () => {
  let component: CalendarDateFilterComponent;
  let fixture: ComponentFixture<CalendarDateFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarDateFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarDateFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
