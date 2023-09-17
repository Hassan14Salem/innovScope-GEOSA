import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManSecP02ComponentComponent } from './man-sec-p02-component.component';

describe('ManSecP02ComponentComponent', () => {
  let component: ManSecP02ComponentComponent;
  let fixture: ComponentFixture<ManSecP02ComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManSecP02ComponentComponent]
    });
    fixture = TestBed.createComponent(ManSecP02ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
