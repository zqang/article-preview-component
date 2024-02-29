import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isActive = false;
  isMobile = this.detectMobileDevice();

  onClick(): void {
    this.isActive = !this.isActive;
    console.log(this.isActive);
  }

  detectMobileDevice(): boolean {
    return window.innerWidth <= 1080; // Adjust the width threshold as needed
  }
}
