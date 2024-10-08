import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Output() modalOpened = new EventEmitter<void>();

  openModal() {
    this.modalOpened.emit();
  }
}
