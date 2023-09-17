import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GMPage4Component } from './gmpage4.component';

describe('GMPage4Component', () => {
  let component: GMPage4Component;
  let fixture: ComponentFixture<GMPage4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GMPage4Component]
    });
    fixture = TestBed.createComponent(GMPage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
