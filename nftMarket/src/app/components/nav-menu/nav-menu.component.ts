import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {
  logo: string = "/icons/LogoPurple.svg";
  user: string = "/icons/User.svg";

  isActive: boolean = false;

  toggleActive() {
    this.isActive = !this.isActive
  }
}
