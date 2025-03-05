import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout-navbar',
  imports: [MatToolbarModule, MatButtonModule, MatTooltipModule, MatIconModule, CommonModule, RouterLink],
  templateUrl: './layout-navbar.component.html',
  styleUrl: './layout-navbar.component.css'
})
export class LayoutNavbarComponent {

}
