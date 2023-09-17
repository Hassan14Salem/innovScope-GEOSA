import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GisManagerComponent1Component } from './gis-manager-component1.component';

describe('GisManagerComponent1Component', () => {
  let component: GisManagerComponent1Component;
  let fixture: ComponentFixture<GisManagerComponent1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GisManagerComponent1Component]
    });
    fixture = TestBed.createComponent(GisManagerComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
