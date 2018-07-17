import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookService } from './../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  value = "";
  books: Book[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.value = this.activatedRoute.snapshot.params.value;
    this.findByTitleContaining(this.value);
  }

  findByTitleContaining( value : string ) {
    this.bookService
      .findByTitleContaining(this.value)
      .subscribe( data => {
        this.books = data._embedded.books;
      });
  }

}
