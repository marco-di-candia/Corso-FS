import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../interface/register';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthData } from '../interface/auth-data';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class AuthServiceService {
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

    apiURL = environment.apiURL;
    jwtHelper = new JwtHelperService();
    private userId: number | null = null;

    // elementi per gestire la procedura di login
    private authSub = new BehaviorSubject<AuthData | null>(null);
    user$ = this.authSub.asObservable();
    timeOut: any;

    constructor(private http: HttpClient, private router: Router) { }

    login(data: { email: string; password: string }) {
        return this.http.post<AuthData>(`${this.apiURL}login`, data).pipe(
            tap((data) => {
                console.log('Auth data: ', data);
            }),
            tap((data) => {
                this.authSub.next(data);
                localStorage.setItem('user', JSON.stringify(data));
                this.autoLogout(data);
                console.log('User logged in:', data);
            }),
            catchError(this.errors)
        );
    }

    signup(data: Register) {
        return this.http.post(`${this.apiURL}register`, data).pipe(catchError(this.errors));
    }

    logout() {
        this.authSub.next(null);
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
        console.log('User logged out');

    }
    restore() {
        const userJson = localStorage.getItem('user');
        if (userJson) {
            const user: AuthData = JSON.parse(userJson);
            this.authSub.next(user);
            const userId = user.user.id; // Ottieni l'ID dell'utente dall'oggetto AuthData
            this.setUserId(parseInt(userId)); // Converti l'ID dell'utente da stringa a numero
            this.autoLogout(user);
            console.log('User restored from local storage:', user);
        } else {
            console.log('Nessun dato utente trovato nel local storage');
        }
    }




    autoLogout(user: AuthData) {
        const dateExpiration = this.jwtHelper.getTokenExpirationDate(user.accessToken) as Date;
        const millisecondsExp = dateExpiration.getTime() - new Date().getTime();
        this.timeOut = setTimeout(() => {
            this.logout();
        }, millisecondsExp);
        console.log('Auto logout scheduled in', millisecondsExp, 'milliseconds');
    }

    private errors(err: any) {
        console.log(err.error);
        switch (err.error) {
            case 'Email already exists':
                return throwError('utente già presente');
                break;

            case 'Incorrect password':
                return throwError('password errata');
                break;

            case 'Cannot find user':
                return throwError('Utente non trovato');
                break;

            default:
                return throwError('Errore nella chiamata');
                break;
        }
    }

    setUserId(userId: number) {
        this.userId = userId;
    }
    // Metodo per ottenere l'ID dell'utente
    getUserId(): number | null {
        return this.userId;
    }
}
