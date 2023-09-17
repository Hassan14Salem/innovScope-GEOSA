import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOneOfsecP01Component } from './modal-one-ofsec-p01.component';

describe('ModalOneOfsecP01Component', () => {
  let component: ModalOneOfsecP01Component;
  let fixture: ComponentFixture<ModalOneOfsecP01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalOneOfsecP01Component]
    });
    fixture = TestBed.createComponent(ModalOneOfsecP01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
