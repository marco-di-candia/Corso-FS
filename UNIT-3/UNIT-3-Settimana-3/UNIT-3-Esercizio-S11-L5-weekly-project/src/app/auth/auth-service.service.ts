import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importa il modulo HttpClient per effettuare richieste HTTP
import { Register } from '../interface/register'; // Importa l'interfaccia Register
import { environment } from 'src/environments/environment.development'; // Importa l'ambiente per le variabili di configurazione
import { BehaviorSubject, throwError } from 'rxjs'; // Importa BehaviorSubject e throwError da RxJS
import { catchError, tap } from 'rxjs/operators'; // Importa gli operatori catchError e tap da RxJS
import { Router } from '@angular/router'; // Importa il modulo Router per gestire la navigazione
import { AuthData } from '../interface/auth-data'; // Importa l'interfaccia AuthData
import { JwtHelperService } from '@auth0/angular-jwt'; // Importa il servizio JwtHelperService per gestire i token JWT

@Injectable({
    providedIn: 'root'
})
export class AuthServiceService {
    // Oggetto utente con i campi necessari
    user: {
        id: number;
        email: string;
        password: string;
        name: string;
        imageUrl: string;
    } = {
            id: 0,
            email: '',
            password: '',
            name: '',
            imageUrl: ''
        };

    // URL dell'API
    apiURL = environment.apiURL;

    // Servizio JwtHelperService per gestire i token JWT
    jwtHelper = new JwtHelperService();

    // ID dell'utente
    private userId: number | null = null;

    // BehaviorSubject per gestire lo stato di autenticazione
    private authSub = new BehaviorSubject<AuthData | null>(null);
    user$ = this.authSub.asObservable();

    // Timer per il logout automatico
    timeOut: any;

    constructor(private http: HttpClient, private router: Router) { }

    // Metodo per effettuare il login
    login(data: { email: string; password: string }) {
        return this.http.post<AuthData>(`${this.apiURL}login`, data).pipe(
            tap((data) => {
                console.log('Auth data: ', data);
            }),
            tap((data) => {
                this.authSub.next(data); // Aggiorna lo stato di autenticazione
                localStorage.setItem('user', JSON.stringify(data)); // Salva i dati utente nel local storage
                this.autoLogout(data); // Avvia il timer per il logout automatico
                console.log('User logged in:', data);
            }),
            catchError(this.errors) // Gestisce gli errori
        );
    }

    // Metodo per effettuare la registrazione
    signup(data: Register) {
        return this.http.post(`${this.apiURL}register`, data).pipe(catchError(this.errors)); // Effettua una richiesta POST per la registrazione
    }

    // Metodo per effettuare il logout
    logout() {
        this.authSub.next(null); // Resetta lo stato di autenticazione
        localStorage.removeItem('user'); // Rimuove i dati utente dal local storage
        this.router.navigate(['/login']); // Reindirizza l'utente alla pagina di login
        console.log('User logged out');
    }

    // Metodo per ripristinare lo stato dell'utente dal local storage
    restore() {
        const userJson = localStorage.getItem('user'); // Ottieni i dati utente dal local storage
        if (userJson) {
            const user: AuthData = JSON.parse(userJson); // Converte i dati utente in formato JSON
            this.authSub.next(user); // Aggiorna lo stato di autenticazione
            const userId = user.user.id; // Ottieni l'ID dell'utente dall'oggetto AuthData
            this.setUserId(parseInt(userId)); // Imposta l'ID dell'utente
            this.autoLogout(user); // Avvia il timer per il logout automatico
            console.log('User restored from local storage:', user);
        } else {
            console.log('Nessun dato utente trovato nel local storage');
        }
    }

    // Metodo per avviare il timer per il logout automatico
    autoLogout(user: AuthData) {
        const dateExpiration = this.jwtHelper.getTokenExpirationDate(user.accessToken) as Date; // Ottieni la data di scadenza del token JWT
        const millisecondsExp = dateExpiration.getTime() - new Date().getTime(); // Calcola la differenza di tempo in millisecondi
        this.timeOut = setTimeout(() => {
            this.logout(); // Effettua il logout automatico
        }, millisecondsExp);
        console.log('Auto logout scheduled in', millisecondsExp, 'milliseconds');
    }

    // Metodo per gestire gli errori delle chiamate HTTP
    private errors(err: any) {
        console.log(err.error); // Stampa l'errore nella console
        switch (err.error) {
            case 'Email already exists':
                return throwError('utente già presente'); // Solleva un'eccezione per l'email già esistente
                break;

            case 'Incorrect password':
                return throwError('password errata'); // Solleva un'eccezione per la password errata
                break;

            case 'Cannot find user':
                return throwError('Utente non trovato'); // Solleva un'eccezione per l'utente non trovato
                break;

            default:
                return throwError('Errore nella chiamata'); // Solleva un'eccezione generica per altri errori
                break;
        }
    }

    // Metodo per impostare l'ID dell'utente
    setUserId(userId: number) {
        this.userId = userId;
    }

    // Metodo per ottenere l'ID dell'utente
    getUserId(): number | null {
        return this.userId;
    }
}
