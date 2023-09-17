import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GisP03ComponentComponent } from './gis-p03-component.component';

describe('GisP03ComponentComponent', () => {
  let component: GisP03ComponentComponent;
  let fixture: ComponentFixture<GisP03ComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GisP03ComponentComponent]
    });
    fixture = TestBed.createComponent(GisP03ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
