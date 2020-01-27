import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService }  from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMovie();
  }

  movie: Movie;

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getHero(id)
      .subscribe(movie => this.movie = movie);
  }

}
