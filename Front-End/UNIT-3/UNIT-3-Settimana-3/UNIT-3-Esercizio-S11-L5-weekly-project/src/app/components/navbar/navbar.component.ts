import { Component, HostListener } from '@angular/core';
import { AuthData } from 'src/app/interface/auth-data';
import { AuthServiceService } from 'src/app/auth/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarScrolled = false;
  user!: AuthData | null;

  constructor(private authSrv: AuthServiceService) {}

  ngOnInit(): void {
    // Chiamata per il ripristino dello stato di autenticazione
    this.authSrv.restore();

    // Sottoscrizione per ricevere gli aggiornamenti sullo stato di autenticazione
    this.authSrv.user$.subscribe((user) => {
      this.user = user;
    });
  }

  logout() {
    this.authSrv.logout();
  }

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
