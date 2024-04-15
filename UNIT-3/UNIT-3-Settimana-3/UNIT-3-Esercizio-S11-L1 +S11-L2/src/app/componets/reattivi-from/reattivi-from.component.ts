import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service'; // Import del servizio AuthService

@Component({
  selector: 'app-reattivi-from',
  templateUrl: './reattivi-from.component.html',
  styleUrls: ['./reattivi-from.component.css']
})
export class ReattiviFromComponent implements OnInit {
  reattiviForm!: FormGroup; // Dichiarazione della variabile reattiviForm di tipo FormGroup
  showPassword: boolean = false; // Variabile per mostrare/nascondere la password
  isAuthenticated: boolean = false; // Variabile per controllare lo stato di autenticazione dell'utente

  constructor(private auth: AuthService){} // Inizializzazione del servizio AuthService nel costruttore

  ngOnInit(): void {
    // Inizializzazione del form reattivo e definizione dei suoi controlli
    this.reattiviForm = new FormGroup({
      nome: new FormControl(null, Validators.required), // Controllo per il campo nome, obbligatorio
      cognome: new FormControl(null, Validators.required), // Controllo per il campo cognome, obbligatorio
      password: new FormControl(null, [Validators.required, Validators.minLength(10)]), // Controllo per il campo password, obbligatorio e lunghezza minima 10
      ConfermaPassword: new FormControl(null, [Validators.required, this.passwordsMatchValidator.bind(this)]), // Controllo per il campo ConfermaPassword, obbligatorio e validato tramite la funzione passwordsMatchValidator
      genere: new FormControl(), // Controllo per il campo genere
      textarea: new FormControl(null), // Controllo per il campo textarea
      usename: new FormControl(null, Validators.required) // Controllo per il campo usename, obbligatorio
    });

    // Controllo dello stato di autenticazione e assegnazione alla variabile isAuthenticated
    this.isAuthenticated = this.auth.isAuthenticated;
  }

  // Funzione chiamata quando il form viene sottoposto
  onSubmit() {
    // Recupero dei dati dal form e salvataggio nel localStorage
    const userData = this.reattiviForm.value;
    localStorage.setItem('user', JSON.stringify(userData));
  }

  // Validatore per confrontare la password e la sua conferma
  passwordsMatchValidator(control: FormControl): { [s: string]: boolean } | null {
    if (!this.reattiviForm) {
      return null; // Non fare nulla se reattiviForm non è definito
    }

    const password = this.reattiviForm.controls['password'].value; // Recupero del valore della password
    const confirmPassword = control.value; // Recupero del valore della conferma della password

    // Controllo se le password corrispondono e restituisco un oggetto se non corrispondono
    if (password !== confirmPassword) {
      return { 'passwordMismatch': true };
    }
    return null; // Ritorno null se le password corrispondono
  }

  // Funzione per mostrare/nascondere la password
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
