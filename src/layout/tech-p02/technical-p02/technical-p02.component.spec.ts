import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalP02Component } from './technical-p02.component';

describe('TechnicalP02Component', () => {
  let component: TechnicalP02Component;
  let fixture: ComponentFixture<TechnicalP02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicalP02Component]
    });
    fixture = TestBed.createComponent(TechnicalP02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
