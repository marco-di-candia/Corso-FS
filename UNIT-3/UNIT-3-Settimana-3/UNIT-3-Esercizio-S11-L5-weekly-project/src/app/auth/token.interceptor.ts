import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'; // Importa le classi Http necessarie
import { Observable } from 'rxjs'; // Importa Observable da RxJS
import { AuthServiceService } from './auth-service.service'; // Importa il servizio AuthServiceService
import { switchMap, take } from 'rxjs/operators'; // Importa gli operatori switchMap e take da RxJS

@Injectable() // Decoratore per indicare che la classe è iniettabile
export class TokenInterceptor implements HttpInterceptor { // Implementa l'interfaccia HttpInterceptor

  constructor(private authSrv: AuthServiceService) { } // Inietta il servizio AuthServiceService

  intercept(
    request: HttpRequest<unknown>, // La richiesta HTTP in arrivo
    next: HttpHandler // Il gestore della richiesta successivo
  ): Observable<HttpEvent<unknown>> { // Interfaccia Observable per gli eventi HTTP
    return this.authSrv.user$.pipe( // Ottieni lo stato corrente dell'utente
      take(1), // Prendi solo il primo valore emesso per evitare il rischio di memory leak
      switchMap(user => { // Passa allo stream interno solo se l'utente è disponibile
        if (user) { // Se l'utente è disponibile
          const newReq = request.clone({ // Clona la richiesta originale
            headers: request.headers.append('Authorization', `Bearer ${user.accessToken}`) // Aggiungi l'intestazione Authorization con il token JWT
          });
          console.log(newReq); // Stampa la nuova richiesta
          return next.handle(newReq); // Passa la nuova richiesta al gestore delle richieste successivo
        } else { // Se l'utente non è disponibile
          return next.handle(request); // Passa la richiesta originale al gestore delle richieste successivo senza modifiche
        }
      })
    );
  }
}
