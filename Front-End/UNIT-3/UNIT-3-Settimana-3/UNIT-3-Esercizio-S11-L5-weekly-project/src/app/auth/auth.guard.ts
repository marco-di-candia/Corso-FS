import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router'; // Importa le classi necessarie per la gestione delle route
import { Observable } from 'rxjs'; // Importa Observable da RxJS
import { AuthServiceService } from './auth-service.service'; // Importa il servizio AuthServiceService
import { take, map } from 'rxjs/operators'; // Importa gli operatori take e map da RxJS

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate { // Implementa l'interfaccia CanActivate per definire un guardia di navigazione
    constructor(private authSrv: AuthServiceService, private router: Router) { } // Inietta il servizio AuthServiceService e il router

    canActivate(
        route: ActivatedRouteSnapshot, // Lo snapshot dell'attuale route
        state: RouterStateSnapshot // Lo snapshot dello stato del router
    ):
        | Observable<boolean | UrlTree> // Restituisce un Observable che emette un valore booleano o un UrlTree
        | Promise<boolean | UrlTree> // Restituisce una promessa che risolve un valore booleano o un UrlTree
        | boolean // Restituisce un valore booleano
        | UrlTree { // Restituisce un UrlTree
        return this.authSrv.user$.pipe( // Ottieni lo stato corrente dell'utente
            take(1), // Prendi solo il primo valore emesso per evitare il rischio di memory leak
            map((user) => { // Usa l'operatore map per trasformare lo stato dell'utente in una booleana o un UrlTree
                if (user) { // Se l'utente è autenticato
                    return true; // Autorizza la navigazione
                }
                alert('Devi essere loggato per visualizzare questa risorsa!'); // Mostra un avviso all'utente
                return this.router.createUrlTree(['/login']); // Reindirizza l'utente alla pagina di login e restituisce un UrlTree
            })
        );
    }
}
