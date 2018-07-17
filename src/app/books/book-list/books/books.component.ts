import { Book } from './../../book';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnChanges {

  @Input() books: Book[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.books)
      this.rows = this.groupColumns(this.books);
  }

  groupColumns(books: Book[]) {
    const newRows = [];
    for(let i = 0; i < books.length; i += 4)
      newRows.push(books.slice(i, i+4));

    return newRows;
  }

}
