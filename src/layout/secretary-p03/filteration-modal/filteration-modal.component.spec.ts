import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterationModalComponent } from './filteration-modal.component';

describe('FilterationModalComponent', () => {
  let component: FilterationModalComponent;
  let fixture: ComponentFixture<FilterationModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterationModalComponent]
    });
    fixture = TestBed.createComponent(FilterationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
