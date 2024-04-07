import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development'; // Importa l'ambiente di sviluppo
import { moviePopular } from '../interface/db.json'; // Importa il tipo di dato 'moviePopular' da un file JSON

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiURL = environment.apiURL; // Ottiene l'URL dell'API dall'ambiente di sviluppo

  constructor(private http: HttpClient) { }

  // Ottiene la lista dei film popolari
  getMovies() {
    // Esegue una richiesta GET per ottenere la lista dei film popolari
    return this.http.get<moviePopular[]>(`${this.apiURL}movies-popular`);
  }

  // Ottiene un film popolare utilizzando l'ID del film
  getMoviesId(id: number) {
    // Esegue una richiesta GET per ottenere il film popolare utilizzando l'ID specificato
    return this.http.get<moviePopular>(`${this.apiURL}movies-popular/${id}`);
  }
}
