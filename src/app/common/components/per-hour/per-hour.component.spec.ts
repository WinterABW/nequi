import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerHourComponent } from './per-hour.component';

describe('PerHourComponent', () => {
  let component: PerHourComponent;
  let fixture: ComponentFixture<PerHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerHourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
