import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalP01Component } from './technical-p01.component';

describe('TechnicalP01Component', () => {
  let component: TechnicalP01Component;
  let fixture: ComponentFixture<TechnicalP01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicalP01Component]
    });
    fixture = TestBed.createComponent(TechnicalP01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
