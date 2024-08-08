import { Component } from '@angular/core';
import { ButtonsComponent } from './buttons/buttons.component';
import { BalanceComponent } from '../../common/components/balance/balance.component';

@Component({
  selector: 'app-balance-view',
  standalone: true,
  imports: [ButtonsComponent, BalanceComponent],
  templateUrl: './balance-view.component.html',
  styleUrl: './balance-view.component.scss',
})
export class BalanceComponentView {}
