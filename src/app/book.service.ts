import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './media';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBook(id: number): Observable<Book> {
    const url = `/api/book/${id}`;
    
    return this.http.get<Book>(url).pipe(

      catchError(this.handleError<Book>("getBook id=${id}"))
    );

  }

  getRecentBooks(): Observable<Book[]>{
    return this.http.get<Book[]>("/api/books/recent")
      .pipe(
        catchError(this.handleError<Book[]>('getRecentBooks', []))
      );
  }

  getAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>("/api/books")
      .pipe(
        catchError(this.handleError<Book[]>('getAllBooks', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    console.log("Error fetching data");
    return (error: any): Observable<T> => {
      return of(result as T);
    }
  }
}
