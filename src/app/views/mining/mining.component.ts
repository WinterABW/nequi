import { Component } from '@angular/core';
import { PerHourComponent } from '../../common/components/per-hour/per-hour.component';
import { LevelComponent } from '../../common/components/level/level.component';
import { RouterLink } from '@angular/router';
import { BalanceComponent } from '../../common/components/balance/balance.component';
import { ProductComponent } from './components/product/product.component';

const components = [
  PerHourComponent,
  LevelComponent,
  BalanceComponent,
  ProductComponent,
];

@Component({
  selector: 'app-mining',
  standalone: true,
  imports: [RouterLink, components],
  templateUrl: './mining.component.html',
  styleUrl: './mining.component.scss',
})
export class MiningComponent {}
