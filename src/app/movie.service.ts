import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieUrl: "http://test.sekthor.ch/api/movies";

  movies: Movie[] = [
    {
      mediaId: 1,
      title: "Pulp Fiction",
      mediaType: "movie",
      description: "Gangster movie",
      filePath: "/path/to/file.mp4",
      tags: [],
      releaseYear: 1994,
      thumbnail: ""
    },
    {
      mediaId: 2,
      title: "Dark Knight",
      mediaType: "movie",
      description: "Superhero movie",
      filePath: "/path/to/file.mp4",
      tags: [],
      releaseYear: 2008,
      thumbnail: ""
    }
  ]

  getAllMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>("http://localhost:8080/api/movies")
      .pipe(
        catchError(this.handleError<Movie[]>('getMovies', []))
      );
  }

  getHero(id: number): Observable<Movie> {
    const url = `http://localhost:8080/api/movie/${id}`;
    
    return this.http.get<Movie>(url).pipe(

      catchError(this.handleError<Movie>("getHero id=${id}"))
    );

  }

  private handleError<T> (operation = 'operation', result?: T) {
    console.log("Error fetching data");
    return (error: any): Observable<T> => {
      return of(result as T);
    }
  }

  constructor(private http: HttpClient) { }
}
