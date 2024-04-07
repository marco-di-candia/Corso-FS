import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FavoriteInterface } from '../interface/favorite-interface';
import { moviePopular } from '../interface/db.json';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FavoriteServiceService {
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  addFavorite(userId: number, movieId: number, movie: moviePopular): Observable<FavoriteInterface> {
    const newFavorite: FavoriteInterface = {
      id: movie.id,
      userId: userId,
      movieId: movieId,
      poster_path: movie.poster_path,
      title: movie.title
    };
    return this.http.post<FavoriteInterface>(`${this.apiURL}favorites`, newFavorite);
  }

  removeFromFav(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}favorites/${id}`);
  }

  getFavList(userId: number): Observable<FavoriteInterface[]> {
    return this.http.get<FavoriteInterface[]>(`${this.apiURL}favorites?userId=${userId}`);
  }


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
