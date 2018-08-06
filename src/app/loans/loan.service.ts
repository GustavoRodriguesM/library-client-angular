import { Loan } from "./loan";
import { Book } from "./../books/book";
import { environment } from "./../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Client } from "../clients/client";

const API = environment.apiUrl;

@Injectable({
  providedIn: "root"
})
export class LoanService {
  constructor(private http: HttpClient) {}

  save(client: Client, book: Book) {
    let loan: Loan = {
      "book": API + '/books/' + book.id,
      "client": API + '/clients/' + client.id
    };

    console.log(loan);
    return this.http.post<any>(API + "/loans", loan);
  }
}
