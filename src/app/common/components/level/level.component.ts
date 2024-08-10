import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-level',
  standalone: true,
  imports: [NgStyle,NgClass],
  templateUrl: './level.component.html',
  styleUrl: './level.component.scss',
})
export class LevelComponent {
  @Input() progress: number = 0;
  @Input() level: number = 0;
  @Input() userTitle:string = 'Newbie';

  
  
}

