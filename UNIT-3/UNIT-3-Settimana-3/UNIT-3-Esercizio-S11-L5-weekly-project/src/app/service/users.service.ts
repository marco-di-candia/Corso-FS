import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development'; // Importa l'ambiente di sviluppo
import { UserInterface } from '../interface/user-interface'; // Importa il tipo di dato 'UserInterface' dall'interfaccia

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiURL = environment.apiURL; // Ottiene l'URL dell'API dall'ambiente di sviluppo

  constructor(private http: HttpClient) { }

  // Ottiene la lista degli utenti
  getUsers() {
    // Esegue una richiesta GET per ottenere la lista degli utenti
    return this.http.get<UserInterface[]>(`${this.apiURL}users`);
  }

  // Ottiene un utente utilizzando l'ID dell'utente
  getUsersId(id: number) {
    // Esegue una richiesta GET per ottenere l'utente utilizzando l'ID specificato
    return this.http.get<UserInterface>(`${this.apiURL}users/${id}`);
  }
}
