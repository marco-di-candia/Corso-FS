import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Allo scroll, controlla se la pagina è stata scrollata più di 50px
    if (window.scrollY > 50) {
      this.isNavbarScrolled = true;
    } else {
      this.isNavbarScrolled = false;
    }
  }
}
