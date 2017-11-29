import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarFilterByTitleComponent } from './calendar-filter-by-title.component';

describe('CalendarFilterByTitleComponent', () => {
  let component: CalendarFilterByTitleComponent;
  let fixture: ComponentFixture<CalendarFilterByTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarFilterByTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarFilterByTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
