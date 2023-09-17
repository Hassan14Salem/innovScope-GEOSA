import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GMPage3Component } from './gmpage3.component';

describe('GMPage3Component', () => {
  let component: GMPage3Component;
  let fixture: ComponentFixture<GMPage3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GMPage3Component]
    });
    fixture = TestBed.createComponent(GMPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
