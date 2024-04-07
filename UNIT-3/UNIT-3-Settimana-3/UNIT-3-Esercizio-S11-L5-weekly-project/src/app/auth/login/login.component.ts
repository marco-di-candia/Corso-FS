import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service'; // Importa il servizio di autenticazione
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', // Percorso del template HTML associato al componente
  styleUrls: ['./login.component.css'] // Percorso dei fogli di stile associati al componente
})
export class LoginComponent {
  errorMessage: string = ''; // Variabile per memorizzare il messaggio di errore

  // Costruttore del componente che inietta il servizio di autenticazione e il router
  constructor(private authSrv: AuthServiceService, private router: Router) {}

  // Metodo chiamato quando il form di login viene inviato
  login(form: NgForm) {
    console.log(form.value); // Stampa i valori del form nel console log
    
    // Chiama il metodo di login del servizio di autenticazione
    this.authSrv.login(form.value).subscribe(
      () => {
        // Login riuscito, reindirizza alla pagina principale
        this.router.navigate(['/']);
      },
      (error) => {
        // Si è verificato un errore durante il login, gestisci l'errore
        console.error(error); // Stampa l'errore nel console log
        this.errorMessage = 'Email or password is incorrect'; // Imposta il messaggio di errore da visualizzare
      }
    );
  }
}
