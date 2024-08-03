import { Component, HostListener, inject, OnInit } from '@angular/core';
import { ControllerTapService } from '../../services/common/controller-tap.service';
import { HammerModule } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
@Component({
  selector: 'app-tap',
  standalone: true,
  imports: [HammerModule],
  templateUrl: './tap.component.html',
  styleUrl: './tap.component.scss',
})
export class TapComponent implements OnInit {
  private tapSvc = inject(ControllerTapService);
  multiTouchCount = 0;
  hammer: HammerManager | undefined;

/*   @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    if (event.touches.length > 1) {
      console.log('1 solo toque');
    }
  }

  tap() {
    const currentCoins = this.tapSvc.getCoins();
    this.tapSvc.setCoins(currentCoins + 1);
  } */

  ngOnInit() {
    this.hammer = new Hammer.Manager(document.body);
    this.hammer.add(new Hammer.Pinch());
    this.hammer.on('pinch', (event) => {
      this.multiTouchCount = event.pointers.length;
      console.log(`Número de dedos: ${this.multiTouchCount}`);
    });
  }
}
