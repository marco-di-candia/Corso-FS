import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { moviePopular } from 'src/app/interface/db.json';
import { FavoriteInterface } from 'src/app/interface/favorite-interface';
import { FavoriteServiceService } from 'src/app/service/favorite-service.service';
import { AuthServiceService } from 'src/app/auth/auth-service.service'; // Importa il servizio AuthDataService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: moviePopular[] = [];
  favs: FavoriteInterface[] = [];

  constructor(
    private movieService: MovieService,
    private favoriteService: FavoriteServiceService,
    private authDataService: AuthServiceService
  ) { }

  ngOnInit(): void {
    // Ottieni i film
    this.authDataService.restore();
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data;
    });

    // Ottieni l'ID dell'utente corrente
    const userId = this.authDataService.getUserId();
    if (userId !== null) {
      // Ottieni la lista dei preferiti utilizzando l'ID dell'utente corrente
      this.favoriteService.getFavList(userId).subscribe((favs: FavoriteInterface[]) => {
        this.favs = favs;
        console.log('Preferiti:', this.favs); // Stampa la lista dei preferiti
      });
    } else {
      console.log('Utente non autenticato');
      // Gestisci il caso in cui l'utente non è autenticato, ad esempio reindirizzandolo alla pagina di accesso.
    }
  }

  addToFavs(movie: moviePopular) {
    const userId = this.authDataService.getUserId(); // Ottieni l'ID dell'utente corrente
    if (userId !== null) {
      const movieId = movie.id;
      this.favoriteService.addFavorite(userId, movieId, movie).subscribe((newFav: FavoriteInterface) => {
        console.log('Film aggiunto ai preferiti:', newFav);
        // Aggiorna la lista dei preferiti dopo l'aggiunta
        this.favs.push(newFav);
      });
    } else {
      console.log('Utente non autenticato');
      // Gestisci il caso in cui l'utente non è autenticato, ad esempio reindirizzandolo alla pagina di accesso.
    }
  }


  isFav(id: number) {
    return this.favs.some(fav => fav.movieId === id);
  }

  removeFromFav(id: number) {
    this.favoriteService.removeFromFav(id).subscribe(() => {
      console.log('Film rimosso dai preferiti:', id);
      // Aggiorna la lista dei preferiti dopo la rimozione
      this.favs = this.favs.filter(fav => fav.id !== id);
    });
  }
}
