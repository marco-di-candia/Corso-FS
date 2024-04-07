import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FavoriteInterface } from '../interface/favorite-interface';
import { moviePopular } from '../interface/db.json'; // Importa il tipo di dato 'moviePopular' da un file JSON
import { environment } from 'src/environments/environment.development'; // Importa l'ambiente di sviluppo

@Injectable({
  providedIn: 'root'
})
export class FavoriteServiceService {
  apiURL = environment.apiURL; // Ottiene l'URL dell'API dall'ambiente di sviluppo

  constructor(private http: HttpClient) { }

  // Aggiunge un film ai preferiti per un utente specifico
  addFavorite(userId: number, movieId: number, movie: moviePopular): Observable<FavoriteInterface> {
    const newFavorite: FavoriteInterface = {
      id: movie.id,
      userId: userId,
      movieId: movieId,
      poster_path: movie.poster_path,
      title: movie.title
    };
    // Esegue una richiesta POST per aggiungere il film ai preferiti
    return this.http.post<FavoriteInterface>(`${this.apiURL}favorites`, newFavorite);
  }

  // Rimuove un film dai preferiti utilizzando l'ID del preferito
  removeFromFav(id: number): Observable<any> {
    // Esegue una richiesta DELETE per rimuovere il film dai preferiti
    return this.http.delete<any>(`${this.apiURL}favorites/${id}`);
  }

  // Ottiene la lista dei film preferiti per un utente specifico
  getFavList(userId: number): Observable<FavoriteInterface[]> {
    // Esegue una richiesta GET per ottenere la lista dei film preferiti per l'utente specificato
    return this.http.get<FavoriteInterface[]>(`${this.apiURL}favorites?userId=${userId}`);
  }

  // Verifica se un film è tra i preferiti
  isFav(id: number): Observable<boolean> {
    // Implementa la logica per verificare se il film con l'ID specificato è tra i preferiti
    // Qui potresti fare una richiesta al server per controllare se l'ID è tra i preferiti
    // In questo esempio, restituiamo un observable di tipo booleano per mantenere la compatibilità
    // con il tuo codice esistente.
    return new Observable<boolean>(observer => {
      // Simuliamo una risposta dal server
      const isFavorite = Math.random() < 0.5; // Simula il 50% di probabilità che il film sia tra i preferiti
      observer.next(isFavorite);
      observer.complete();
    });
  }
}
