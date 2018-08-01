import { Component, OnInit, OnChanges, SimpleChanges, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { BookService } from './../book.service';
import { Book } from "../book";

@Component({
  selector: "app-book-search",
  templateUrl: "./book-search.component.html",
  styleUrls: ["./book-search.component.css"]
})
export class BookSearchComponent implements OnInit, OnChanges {
  books: Book[] = [];
  @Input() value = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.findAll();
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes.value){
      console.log("Changes on 'value' are found!");
      this.findAll();
    }
  }

  findAll() {
  this.value = this.activatedRoute.snapshot.params.value;
    console.log("Value: " + this.value);
    this.bookService.findByTitleContaining(this.value)
      .subscribe(data => this.books = data._embedded.books);
  }

  
}
