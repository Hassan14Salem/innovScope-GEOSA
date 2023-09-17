import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechManagerP02Component } from './tech-manager-p02.component';

describe('TechManagerP02Component', () => {
  let component: TechManagerP02Component;
  let fixture: ComponentFixture<TechManagerP02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechManagerP02Component]
    });
    fixture = TestBed.createComponent(TechManagerP02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
