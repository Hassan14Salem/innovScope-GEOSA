import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GisP04ComponentComponent } from './gis-p04-component.component';

describe('GisP04ComponentComponent', () => {
  let component: GisP04ComponentComponent;
  let fixture: ComponentFixture<GisP04ComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GisP04ComponentComponent]
    });
    fixture = TestBed.createComponent(GisP04ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
