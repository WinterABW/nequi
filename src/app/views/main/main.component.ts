import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TapComponent } from '../tap/tap.component';
import { ActionsComponent } from '../actions/actions.component';
import { BalanceComponentView } from '../balance/balance-view.component';
import { EnergyBoostComponent } from '../energy-boost/energy-boost.component';

const components = [
  HeaderComponent,
  TapComponent,
  ActionsComponent,
  BalanceComponentView,
  EnergyBoostComponent,
];

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [components],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
