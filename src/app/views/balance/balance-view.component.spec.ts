import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceComponentView } from './balance-view.component';

describe('BalanceComponentView', () => {
  let component: BalanceComponentView;
  let fixture: ComponentFixture<BalanceComponentView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalanceComponentView],
    }).compileComponents();

    fixture = TestBed.createComponent(BalanceComponentView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
