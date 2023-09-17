import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecP06Component } from './sec-p06.component';

describe('SecP06Component', () => {
  let component: SecP06Component;
  let fixture: ComponentFixture<SecP06Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecP06Component]
    });
    fixture = TestBed.createComponent(SecP06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
