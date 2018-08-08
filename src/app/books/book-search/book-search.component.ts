import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { BookService } from '../book.service';
import { Book } from "../../core/interfaces/book";

@Component({
  selector: "app-book-search",
  templateUrl: "./book-search.component.html",
  styleUrls: ["./book-search.component.css"]
})
export class BookSearchComponent implements OnInit {
  books: Book[] = [];
  @Input() value = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.findAll();
  }

  findAll() {
  this.value = this.activatedRoute.snapshot.params.value;
    this.bookService.findByTitleContaining(this.value)
      .subscribe(data => this.books = data._embedded.content);
  }

  
}
