import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErsalEle3tmadComponent } from './ersal-ele3tmad.component';

describe('ErsalEle3tmadComponent', () => {
  let component: ErsalEle3tmadComponent;
  let fixture: ComponentFixture<ErsalEle3tmadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErsalEle3tmadComponent]
    });
    fixture = TestBed.createComponent(ErsalEle3tmadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
