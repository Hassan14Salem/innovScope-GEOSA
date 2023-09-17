import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecP07Component } from './sec-p07.component';

describe('SecP07Component', () => {
  let component: SecP07Component;
  let fixture: ComponentFixture<SecP07Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecP07Component]
    });
    fixture = TestBed.createComponent(SecP07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
