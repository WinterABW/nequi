import { Component, inject } from '@angular/core';
import { ControllerTapService } from '../../services/common/controller-tap.service';
import { ButtonsComponent } from './buttons/buttons.component';

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [ButtonsComponent],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.scss'
})
export class BalanceComponent {
  coins: number =0;

  private tapSvc = inject(ControllerTapService);

  ngOnInit() {
    this.tapSvc.coins$.subscribe((coin) => (this.coins = coin));
  }
}
