import { Component, OnInit } from "@angular/core";

import { Author } from "../author";
import { AuthorService } from "./../author.service";

@Component({
  selector: "app-author-list",
  templateUrl: "./author-list.component.html",
  styleUrls: ["./author-list.component.css"]
})
export class AuthorListComponent implements OnInit {
  authors: Author[];

  constructor(private authorService: AuthorService) {}

  ngOnInit() {
    this.authorService
      .findAll()
      .subscribe(data => (this.authors = data._embedded.authors));
  }
}
