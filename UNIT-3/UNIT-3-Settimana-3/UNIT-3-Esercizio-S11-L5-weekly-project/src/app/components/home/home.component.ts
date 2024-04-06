import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { moviePopular } from 'src/app/interface/db.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies:moviePopular [] = []
  constructor(private service:MovieService){}

  ngOnInit(): void {
    this.service.getMovies().subscribe((data) => {
      this.movies = data;
  });
  }

}
