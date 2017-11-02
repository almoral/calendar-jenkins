import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarSearchBoxComponent } from './calendar-search-box.component';

describe('CalendarSearchBoxComponent', () => {
  let component: CalendarSearchBoxComponent;
  let fixture: ComponentFixture<CalendarSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarSearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
