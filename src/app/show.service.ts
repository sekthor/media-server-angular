import { Injectable } from '@angular/core';
import { Show } from './media';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http: HttpClient) { }

  private showUrl = "/api/shows";

  getAllShows(): Observable<Show[]> {
    return this.http.get<Show[]>(this.showUrl)
      .pipe(
        catchError(this.handleError<Show[]>('getAllShows', []))
      );
  }

  getRecentShows(): Observable<Show[]> {
    return this.http.get<Show[]>(this.showUrl+"/recent")
      .pipe(
        catchError(this.handleError<Show[]>('getRecentShows', []))
      );
  }

  getMovie(id: number): Observable<Show> {
    const url = `/api/show/${id}`;
    
    return this.http.get<Show>(url).pipe(

      catchError(this.handleError<Show>("getShow id=${id}"))
    );

  }

  private handleError<T> (operation = 'operation', result?: T) {
    console.log("Error fetching data");
    return (error: any): Observable<T> => {
      return of(result as T);
    }
  }
}
