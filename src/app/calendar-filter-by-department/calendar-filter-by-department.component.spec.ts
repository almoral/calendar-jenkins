import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarFilterByDepartmentComponent } from './calendar-filter-by-department.component';

describe('CalendarFilterByDepartmentComponent', () => {
  let component: CalendarFilterByDepartmentComponent;
  let fixture: ComponentFixture<CalendarFilterByDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarFilterByDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarFilterByDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
