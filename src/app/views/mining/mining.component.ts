import { Component } from '@angular/core';
import { PerHourComponent } from '../../common/components/per-hour/per-hour.component';
import { LevelComponent } from '../../common/components/level/level.component';
import { RouterLink } from '@angular/router';
import { BalanceComponent } from '../../common/components/balance/balance.component';

const components = [PerHourComponent, LevelComponent, BalanceComponent];

@Component({
  selector: 'app-mining',
  standalone: true,
  imports: [RouterLink, components],
  templateUrl: './mining.component.html',
  styleUrl: './mining.component.scss',
})
export class MiningComponent {}
