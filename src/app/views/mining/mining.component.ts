import { Component } from '@angular/core';
import { PerHourComponent } from '../../common/components/per-hour/per-hour.component';
import { LevelComponent } from '../../common/components/level/level.component';
import { RouterLink } from '@angular/router';
import { BalanceComponent } from '../../common/components/balance/balance.component';
import { ProductComponent } from './components/product/product.component';
import { NavComponent } from './components/nav/nav.component';
import { ToastComponent } from './components/toast/toast.component';
import { ActionsComponent } from '../../common/components/actions/actions.component';
import { NgClass } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';

const components = [
  PerHourComponent,
  LevelComponent,
  BalanceComponent,
  ProductComponent,
  NavComponent,
  ToastComponent,
  ActionsComponent,
  ModalComponent
];

@Component({
  selector: 'app-mining',
  standalone: true,
  imports: [RouterLink, NgClass, components],
  templateUrl: './mining.component.html',
  styleUrl: './mining.component.scss',
})
export class MiningComponent {
  isModalOpen = false;

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
}
