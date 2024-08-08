import { Component} from '@angular/core';
import { PerHourComponent } from '../../common/components/per-hour/per-hour.component';
import { LevelComponent } from '../../common/components/level/level.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PerHourComponent,LevelComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
}
