import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Book } from '../media';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getBook();
  }

  book: Book;

  getBook(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id)
      .subscribe(book => this.book = book);
  }

}
