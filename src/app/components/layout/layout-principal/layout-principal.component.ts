import { Component } from '@angular/core';
import { LayoutNavbarComponent } from '../layout-navbar/layout-navbar.component';
import { LayoutFooterComponent } from '../layout-footer/layout-footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-principal',
  imports: [LayoutNavbarComponent, LayoutFooterComponent, RouterOutlet],
  templateUrl: './layout-principal.component.html',
  styleUrl: './layout-principal.component.css'
})
export class LayoutPrincipalComponent {

}
