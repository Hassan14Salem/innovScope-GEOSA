import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecP04Component } from './sec-p04.component';

describe('SecP04Component', () => {
  let component: SecP04Component;
  let fixture: ComponentFixture<SecP04Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecP04Component]
    });
    fixture = TestBed.createComponent(SecP04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
