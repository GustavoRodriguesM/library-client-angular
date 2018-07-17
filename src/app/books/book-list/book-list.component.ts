import { BookService } from './../book.service';
import { Book } from './../book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.findAll().subscribe( data => { 
      this.books = data._embedded.books; 
    });
  }

}
