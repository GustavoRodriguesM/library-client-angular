import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

import { Book } from "../../../core/interfaces/book";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "lib-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"]
})
export class BooksComponent implements OnChanges {
  @Input() books: Book[] = [];
  rows: any[] = [];

  API = environment.apiUrl;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.books) this.rows = this.groupColumns(this.books);
  }

  groupColumns(books: Book[]) {
    const newRows = [];
    for (let i = 0; i < books.length; i += 4)
      newRows.push(books.slice(i, i + 4));

    return newRows;
  }
}
