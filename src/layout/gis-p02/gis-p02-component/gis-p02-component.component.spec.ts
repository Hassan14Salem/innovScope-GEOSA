import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GisP02ComponentComponent } from './gis-p02-component.component';

describe('GisP02ComponentComponent', () => {
  let component: GisP02ComponentComponent;
  let fixture: ComponentFixture<GisP02ComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GisP02ComponentComponent]
    });
    fixture = TestBed.createComponent(GisP02ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
