import { NgClass } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgClass],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'], // Corrigió 'styleUrl' a 'styleUrls'
})
export class ModalComponent implements OnInit {
  isSmallScreen: boolean = false;
  @Output() modalClosed = new EventEmitter<void>();
  modalAnimationClass: string = 'fadeInUp'; // Inicialmente se establece la animación de entrada

  ngOnInit() {
    this.checkScreenHeight();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenHeight();
  }

  checkScreenHeight() {
    const viewportHeight = window.innerHeight;
    this.isSmallScreen = viewportHeight < 640;
  }

  closeModal() {
    this.modalAnimationClass = 'fadeOutDown'; // Cambia la animación a la de salida

    // Espera a que la animación termine antes de emitir el evento para cerrar el modal
    setTimeout(() => {
      this.modalClosed.emit();
    }, 1000); // Duración de la animación en milisegundos
  }
}
