import { Component, inject, OnInit } from '@angular/core';
import { ControllerTapService } from '../../../services/common/controller-tap.service';

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.scss',
})
export class BalanceComponent implements OnInit {
  coins!: number;

  private tapSvc = inject(ControllerTapService);

  ngOnInit() {
    this.tapSvc.coins$.subscribe((coin) => (this.coins = coin));
  }
}
