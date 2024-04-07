import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Importa NgForm per gestire i moduli di form
import { AuthServiceService } from '../auth-service.service'; // Importa il servizio AuthServiceService per gestire l'autenticazione
import { Router } from '@angular/router'; // Importa il modulo Router per gestire la navigazione

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authSrv: AuthServiceService, private router: Router) { }

  // Metodo chiamato quando viene inviato il modulo di registrazione
  onSubmit(form: NgForm) {
    console.log(form.value); // Stampa i valori del modulo di registrazione nella console
    try {
      this.authSrv.signup(form.value).subscribe(); // Effettua la registrazione chiamando il metodo signup del servizio AuthServiceService
      this.router.navigate(['/login']); // Reindirizza l'utente alla pagina di login dopo la registrazione
    } catch (error) {
      console.error(error); // Gestisce eventuali errori e stampa messaggi di errore nella console
    }
  }

  // Metodo per verificare se un URL è valido
  isValidUrl(url: string): boolean {
    // Utilizza un'espressione regolare per verificare se l'URL è valido
    const pattern = new RegExp('^(https?:\\/\\/)?' + // Protocollo
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // Dominio
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // oppure indirizzo IP
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // Porta e percorso
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // Parametri della query
      '(\\#[-a-z\\d_]*)?$', 'i'); // Anchor hash
    return !!pattern.test(url); // Restituisce true se l'URL è valido, altrimenti restituisce false
  }
}
