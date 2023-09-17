import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GMPage1Component } from './gmpage1.component';

describe('GMPage1Component', () => {
  let component: GMPage1Component;
  let fixture: ComponentFixture<GMPage1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GMPage1Component]
    });
    fixture = TestBed.createComponent(GMPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
