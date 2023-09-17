import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechManagerPageOneComponent } from './tech-manager-page-one.component';

describe('TechManagerPageOneComponent', () => {
  let component: TechManagerPageOneComponent;
  let fixture: ComponentFixture<TechManagerPageOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechManagerPageOneComponent]
    });
    fixture = TestBed.createComponent(TechManagerPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
