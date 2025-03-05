import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BtnCallMeComponent } from '../../../components/shared/btn-call-number/btn-call-me/btn-call-me.component';

@Component({
  selector: 'app-banner-why-chosse-me',
  imports: [CommonModule, BtnCallMeComponent],
  templateUrl: './banner-why-chosse-me.component.html',
  styleUrl: './banner-why-chosse-me.component.css'
})
export class BannerWhyChosseMeComponent {
  @Input() title: string = 'Why Choose My Towing Service?';
  @Input() description:  string [] = ['Fast & Reliable - We respond quickly and get you back on the road ASAP.','24/7 Availability - Emergencies do not wait, and neither do we!', ' Affordable Pricing - No hidden fees, just honest and fair rates.', 'Experienced & Professional - Trained operators who handle your vehicle with care.','Modern Equipment - State-of-the-art tow trucks for all types of vehicles.', 'Customer Satisfaction - We put our customers first, always.'];

}
