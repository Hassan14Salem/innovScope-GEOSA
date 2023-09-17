import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManSecP01ComponentComponent } from './man-sec-p01-component.component';

describe('ManSecP01ComponentComponent', () => {
  let component: ManSecP01ComponentComponent;
  let fixture: ComponentFixture<ManSecP01ComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManSecP01ComponentComponent]
    });
    fixture = TestBed.createComponent(ManSecP01ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
