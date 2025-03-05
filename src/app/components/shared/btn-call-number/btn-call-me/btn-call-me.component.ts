import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-btn-call-me',
  imports: [MatIconModule],
  templateUrl: './btn-call-me.component.html',
  styleUrl: './btn-call-me.component.css'
})
export class BtnCallMeComponent {

  @Input() texto: string = 'Click aquí' //texto por defecto
}
