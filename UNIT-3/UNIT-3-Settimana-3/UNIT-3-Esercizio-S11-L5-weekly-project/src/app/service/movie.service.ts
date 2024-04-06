import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { moviePopular } from '../interface/db.json';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get<moviePopular[]>(`${this.apiURL}movies-popular`);
  }

  getMoviesId(id: number) {
    return this.http.get<moviePopular>(`${this.apiURL}movies-popular/${id}`);
  }


}
