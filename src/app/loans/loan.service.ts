import { Loan } from "../core/interfaces/loan";
import { Book } from "../core/interfaces/book";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Client } from "../core/interfaces/client";

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
