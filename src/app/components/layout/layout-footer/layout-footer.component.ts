import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout-footer',
  imports: [MatToolbarModule,MatButtonModule, MatTooltipModule, CommonModule],
  templateUrl: './layout-footer.component.html',
  styleUrl: './layout-footer.component.css'
})
export class LayoutFooterComponent {
  year: number = new Date().getFullYear();
}
