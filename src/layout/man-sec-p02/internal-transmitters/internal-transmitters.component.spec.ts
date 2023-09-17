import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalTransmittersComponent } from './internal-transmitters.component';

describe('InternalTransmittersComponent', () => {
  let component: InternalTransmittersComponent;
  let fixture: ComponentFixture<InternalTransmittersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternalTransmittersComponent]
    });
    fixture = TestBed.createComponent(InternalTransmittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
