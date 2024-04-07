import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service'; // Importa il servizio MovieService
import { moviePopular } from 'src/app/interface/db.json'; // Importa il tipo di dato 'moviePopular' da un file JSON
import { FavoriteInterface } from 'src/app/interface/favorite-interface'; // Importa l'interfaccia FavoriteInterface
import { FavoriteServiceService } from 'src/app/service/favorite-service.service'; // Importa il servizio FavoriteServiceService
import { AuthServiceService } from 'src/app/auth/auth-service.service'; // Importa il servizio AuthDataService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: moviePopular[] = []; // Array che conterrà i film popolari
  favs: FavoriteInterface[] = []; // Array che conterrà i preferiti dell'utente

  constructor(
    private movieService: MovieService,
    private favoriteService: FavoriteServiceService,
    private authDataService: AuthServiceService
  ) { }

  ngOnInit(): void {
    // Ottieni i film popolari
    this.authDataService.restore(); // Ripristina i dati dell'utente autenticato
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data; // Assegna i film popolari all'array 'movies'
    });

    // Ottieni l'ID dell'utente corrente
    const userId = this.authDataService.getUserId();
    if (userId !== null) {
      // Ottieni la lista dei preferiti utilizzando l'ID dell'utente corrente
      this.favoriteService.getFavList(userId).subscribe((favs: FavoriteInterface[]) => {
        this.favs = favs; // Assegna i preferiti dell'utente all'array 'favs'
        console.log('Preferiti:', this.favs); // Stampa la lista dei preferiti
      });
    } else {
      console.log('Utente non autenticato');
      // Gestisci il caso in cui l'utente non è autenticato, ad esempio reindirizzandolo alla pagina di accesso.
    }
  }

  // Aggiunge un film ai preferiti
  addToFavs(movie: moviePopular) {
    const userId = this.authDataService.getUserId(); // Ottieni l'ID dell'utente corrente
    if (userId !== null) {
      const movieId = movie.id;
      // Aggiunge il film ai preferiti utilizzando il servizio FavoriteServiceService
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

  // Verifica se un film è tra i preferiti
  isFav(id: number) {
    return this.favs.some(fav => fav.movieId === id);
  }

  // Rimuove un film dai preferiti
  removeFromFav(id: number) {
    // Rimuove il film dai preferiti utilizzando il servizio FavoriteServiceService
    this.favoriteService.removeFromFav(id).subscribe(() => {
      console.log('Film rimosso dai preferiti:', id);
      // Aggiorna la lista dei preferiti dopo la rimozione
      this.favs = this.favs.filter(fav => fav.id !== id);
    });
  }
}
