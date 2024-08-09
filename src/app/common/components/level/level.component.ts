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
  @Input() gradientColors: string[] = ['#450447', '#641b66', '#ed57f7'];
  @Input() level: number = 0;
  @Input() userTitle:string = 'Newbie';

  getGradientStyle(): string {
    return `linear-gradient(90deg, ${this.gradientColors[0]} 0%, ${this.gradientColors[1]} 35%, ${this.gradientColors[2]} 100%)`;
  }
  
}

