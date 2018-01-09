import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarFilterByCategoryComponent } from './calendar-filter-by-category.component';

describe('CalendarFilterByTypeComponent', () => {
  let component: CalendarFilterByCategoryComponent;
  let fixture: ComponentFixture<CalendarFilterByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarFilterByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarFilterByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
