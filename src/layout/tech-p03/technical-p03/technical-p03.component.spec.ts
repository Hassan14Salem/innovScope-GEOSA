import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalP03Component } from './technical-p03.component';

describe('TechnicalP03Component', () => {
  let component: TechnicalP03Component;
  let fixture: ComponentFixture<TechnicalP03Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicalP03Component]
    });
    fixture = TestBed.createComponent(TechnicalP03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
