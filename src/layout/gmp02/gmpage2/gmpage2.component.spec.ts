import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GMPage2Component } from './gmpage2.component';

describe('GMPage2Component', () => {
  let component: GMPage2Component;
  let fixture: ComponentFixture<GMPage2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GMPage2Component]
    });
    fixture = TestBed.createComponent(GMPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
