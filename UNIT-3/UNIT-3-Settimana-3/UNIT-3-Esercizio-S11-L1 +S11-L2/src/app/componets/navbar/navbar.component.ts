import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service'; // Import del servizio AuthService
import { Router } from '@angular/router'; // Import del modulo Router per la gestione delle rotte

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false; // Variabile per controllare lo stato di autenticazione dell'utente

  constructor(private auth: AuthService, private route: Router) { } // Inizializzazione del servizio AuthService e del modulo Router nel costruttore

  ngOnInit(): void {
    this.isAuthenticated = this.auth.isAuthenticated; // Controllo dello stato di autenticazione e assegnazione alla variabile isAuthenticated
  }

  logout(): void {
    this.auth.logout(); // Chiama il metodo logout del AuthService per eseguire il logout dell'utente
    this.route.navigate(['/']); // Reindirizza l'utente alla pagina Home dopo il logout
  }
}
