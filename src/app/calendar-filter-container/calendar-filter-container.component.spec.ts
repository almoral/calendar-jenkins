import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarFilterContainerComponent } from './calendar-filter-container.component';

describe('CalendarFilterContainerComponent', () => {
  let component: CalendarFilterContainerComponent;
  let fixture: ComponentFixture<CalendarFilterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarFilterContainerComponent ]
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
