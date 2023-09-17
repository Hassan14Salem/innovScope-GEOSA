import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GisP01ComponentComponent } from './gis-p01-component.component';

describe('GisP01ComponentComponent', () => {
  let component: GisP01ComponentComponent;
  let fixture: ComponentFixture<GisP01ComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GisP01ComponentComponent]
    });
    fixture = TestBed.createComponent(GisP01ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
