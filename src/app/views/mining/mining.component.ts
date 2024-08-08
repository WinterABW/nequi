import { Component } from '@angular/core';
import { PerHourComponent } from '../../common/components/per-hour/per-hour.component';
import { LevelComponent } from '../../common/components/level/level.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mining',
  standalone: true,
  imports: [PerHourComponent, LevelComponent, RouterLink],
  templateUrl: './mining.component.html',
  styleUrl: './mining.component.scss',
})
export class MiningComponent {}
