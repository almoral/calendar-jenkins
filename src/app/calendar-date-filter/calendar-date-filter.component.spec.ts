import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import {BaseRequestOptions, Http, ResponseOptions, Response, ResponseType} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { CalendarDateFilterComponent } from './calendar-date-filter.component';

describe('CalendarDateFilterComponent', () => {
  let component: CalendarDateFilterComponent;
  let fixture: ComponentFixture<CalendarDateFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [Http],
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
