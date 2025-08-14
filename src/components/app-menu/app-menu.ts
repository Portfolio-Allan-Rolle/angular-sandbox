import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from 'src/app/app.routes';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './app-menu.html',
  styleUrl: './app-menu.scss',
})
export class AppMenu {
  isMenuOpen = signal(false);
  routerLinks = routes;
  onMenuOpen() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }
}
