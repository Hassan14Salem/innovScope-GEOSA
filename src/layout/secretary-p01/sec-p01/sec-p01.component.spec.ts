import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecP01Component } from './sec-p01.component';

describe('SecP01Component', () => {
  let component: SecP01Component;
  let fixture: ComponentFixture<SecP01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecP01Component]
    });
    fixture = TestBed.createComponent(SecP01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
