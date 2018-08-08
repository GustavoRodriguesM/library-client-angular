import { LoanService } from "../../loans/loan.service";
import { ClientService } from "../../clients/client.service";
import { UserService } from "../../core/user/user.service";
import { environment } from "../../../environments/environment";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Book } from "../../core/interfaces/book";

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
    private userService: UserService,
    private clientService: ClientService,
    private loanService: LoanService
  ) {}

  ngOnInit(): void {
    this.book = this.activatedRoute.snapshot.data.book;
  }

  reserve() {
    let client;

    let user = this.userService.getUser();
    this.clientService.findByUser(user).subscribe(data => {
      client = data;
      this.loanService
        .save(client, this.book)
        .subscribe(data => console.log(data));
    });
  }

  hasRole(role: string) {
    return this.userService.hasRole(role);
  }
}
