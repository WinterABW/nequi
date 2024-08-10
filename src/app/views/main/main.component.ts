import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TapComponent } from './tap/tap.component';
import { ActionsComponent } from './actions/actions.component';
import { EnergyBoostComponent } from './energy-boost/energy-boost.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BalanceComponent } from '../../common/components/balance/balance.component';

const components = [
  HeaderComponent,
  ButtonsComponent,
  BalanceComponent,
  TapComponent,
  EnergyBoostComponent,
  ActionsComponent,
];

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [components],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
