import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyBoostComponent } from './energy-boost.component';

describe('EnergyBoostComponent', () => {
  let component: EnergyBoostComponent;
  let fixture: ComponentFixture<EnergyBoostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergyBoostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnergyBoostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
