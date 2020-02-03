import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../media';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getRecentBooks();
  }

  books: Book[];

  getRecentBooks() {
    this.bookService.getAllBooks().subscribe(books => this.books = books);
  }
  

}
