import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarFilterByTypeComponent } from './calendar-filter-by-category.component';

describe('CalendarFilterByTypeComponent', () => {
  let component: CalendarFilterByTypeComponent;
  let fixture: ComponentFixture<CalendarFilterByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarFilterByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarFilterByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
