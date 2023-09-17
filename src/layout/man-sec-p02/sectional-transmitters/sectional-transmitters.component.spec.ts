import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionalTransmittersComponent } from './sectional-transmitters.component';

describe('SectionalTransmittersComponent', () => {
  let component: SectionalTransmittersComponent;
  let fixture: ComponentFixture<SectionalTransmittersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionalTransmittersComponent]
    });
    fixture = TestBed.createComponent(SectionalTransmittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
