import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-where-we-work',
  imports: [CommonModule],
  templateUrl: './where-we-work.component.html',
  styleUrl: './where-we-work.component.css'
})
export class WhereWeWorkComponent {
  @Input() title: string = 'Where we work?';
  @Input() description: string = '24/7 Serving Miami-Dade County and Surrounding Areas';
  @Input() imageUrl: string = 'assets/towing-truck.png';
  @Input() buttonText: string = 'More';
  @Input() image: string = 'assets/mapMiamiDade.png';
}
