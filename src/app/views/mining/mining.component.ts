import { Component } from '@angular/core';
import { PerHourComponent } from '../../common/components/per-hour/per-hour.component';
import { LevelComponent } from '../../common/components/level/level.component';

@Component({
  selector: 'app-mining',
  standalone: true,
  imports: [PerHourComponent,LevelComponent],
  templateUrl: './mining.component.html',
  styleUrl: './mining.component.scss'
})
export class MiningComponent {

}
