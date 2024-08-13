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
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit {
  isSmallScreen: boolean = false;
  @Output() modalClosed = new EventEmitter<void>();

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
    this.modalClosed.emit();
  }
}
