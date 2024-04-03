import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logged: boolean = false; // Imposta il valore iniziale a false

  constructor(private router: Router) { }

   get isAuthenticated(): boolean {
    // Verifica se l'utente è autenticato
    const user = localStorage.getItem('user');
    return user !== null; // Restituisce true se l'utente è autenticato, altrimenti false
  }
  
  logout() {
    // Rimuovi l'utente dal localStorage
    localStorage.removeItem('user');

    // Imposta lo stato di autenticazione su false
    this.logged = false;

    // Reindirizza l'utente alla pagina di login
    this.router.navigate(['/driven']); // Assumi che '/login' sia la pagina di login
  }
}
