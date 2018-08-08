import { Component, OnInit } from "@angular/core";

import { Author } from "../../core/interfaces/author";
import { AuthorService } from "../author.service";

@Component({
  selector: "app-author-list",
  templateUrl: "./author-list.component.html",
  styleUrls: ["./author-list.component.css"]
})
export class AuthorListComponent implements OnInit {
  authors: Author[];

  constructor(
    private authorService: AuthorService
  ) {}

  ngOnInit() {
    this.findAll();
  }

  disable(id) {
    this.authorService.disable(id).subscribe(
      () => {
        this.findAll();
      },
      err => console.log(err)
    );
  }

  enable(id) {
    this.authorService.enable(id).subscribe(
      () => {
        this.findAll();
      },
      err => console.log(err)
    );
  }

  findAll() {
    this.authorService
      .findAllWithTrashed()
      .subscribe(data => (this.authors = data._embedded.content));
  }
}
