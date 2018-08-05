import { UserService } from './../../core/user/user.service';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Book } from "../book";

@Component({
  selector: "lib-book-show",
  templateUrl: "./book-show.component.html",
  styleUrls: ["./book-show.component.css"]
})
export class BookShowComponent implements OnInit {
  book: Book = new Book();

  API = environment.apiUrl;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.book = this.activatedRoute.snapshot.data.book;
  }

  hasRole(role: string) {
    return this.userService.hasRole(role);
  }
}
