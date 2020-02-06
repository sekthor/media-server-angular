import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Media } from './media';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) { }

  searchMedias(term: string): Observable<Media[]> {
    if (!term.trim()){
      return of([]);
    }

    return this.http.get<Media[]>(`/api/search/?query=${term}`).pipe(
      catchError(this.handleError<Media[]>("searchMedias",[]))
      );
  }



  private handleError<T> (operation = 'operation', result?: T) {
    console.log("Error fetching data");
    return (error: any): Observable<T> => {
      return of(result as T);
    }
  }
}
