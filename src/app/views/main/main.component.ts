import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TapComponent } from '../tap/tap.component';
import { ActionsComponent } from '../actions/actions.component';
import { BalanceComponent } from '../balance/balance.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, TapComponent, ActionsComponent, BalanceComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {

}
