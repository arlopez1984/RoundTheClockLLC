import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-all-our-services',
  imports: [CommonModule],
  templateUrl: './all-our-services.component.html',
  styleUrl: './all-our-services.component.css'
})
export class AllOurServicesComponent {

  @Input() title: string = 'Our services';
  @Input() description: string [] = ['🔥 24/7 emergency towing.','🔥 Vehicle transport.','🔥 Accident towing.','🔥 Luxury vehicle/motorcycle transport.' ] ;
  @Input() imageUrl: string = 'assets/towing-truck.png';
  @Input() buttonText: string = 'Más información';
}
