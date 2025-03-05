import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WhatShouldIDoComponent } from '../what-should-i-do/what-should-i-do.component';
import { BtnCallMeComponent } from '../../../components/shared/btn-call-number/btn-call-me/btn-call-me.component';

@Component({
  selector: 'app-banner',
  imports: [CommonModule, WhatShouldIDoComponent,BtnCallMeComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  @Input() title: string = 'Need a tow truck near your location right now?';
  @Input() description: string = 'We know how frustrating it is to be stranded, which is why we offer the best 24/7 towing service in Miami-Dade and surrounding areas.';
  @Input() buttonText: string = 'Call us now!';
  @Input() phoneNumber: string = 'tel:+1 786-750-2303';
}
