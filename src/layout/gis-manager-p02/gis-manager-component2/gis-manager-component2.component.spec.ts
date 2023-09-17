import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GisManagerComponent2Component } from './gis-manager-component2.component';

describe('GisManagerComponent2Component', () => {
  let component: GisManagerComponent2Component;
  let fixture: ComponentFixture<GisManagerComponent2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GisManagerComponent2Component]
    });
    fixture = TestBed.createComponent(GisManagerComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
