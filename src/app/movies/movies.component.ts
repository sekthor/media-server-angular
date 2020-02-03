import { Component, OnInit } from '@angular/core';
import { Movie } from '../media';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  selectedMovie: Movie;
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  movies: Movie[];

  getMovies(): void {
    this.movieService.getAllMovies().subscribe(movies => this.movies = movies);
  }

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

}
