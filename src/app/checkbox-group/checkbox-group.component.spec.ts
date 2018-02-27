import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkbox2GroupComponent } from './checkbox-group.component';

describe('Checkbox2GroupComponent', () => {
  let component: Checkbox2GroupComponent;
  let fixture: ComponentFixture<Checkbox2GroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Checkbox2GroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Checkbox2GroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
