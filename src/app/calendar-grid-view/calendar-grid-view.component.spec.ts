import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarGridViewComponent } from './calendar-grid-view.component';

describe('CalendarGridViewComponent', () => {
  let component: CalendarGridViewComponent;
  let fixture: ComponentFixture<CalendarGridViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarGridViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
