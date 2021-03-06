import { Hateoas } from './../core/interfaces/hateoas';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Book } from "../core/interfaces/book";

const API = environment.apiUrl;
const BOOK_WITH_AUTHORS = "bookWithAuthors";

@Injectable({
  providedIn: "root"
})
export class BookService {

  constructor(private http: HttpClient) {}

  findById(id: string): Observable<Book> {
    return this.http.get<Book>(API + "/books/" + id);
  }

  findAll(): Observable<Hateoas<Book>> {
    return this.http.get<Hateoas<Book>>(API + "/books");
  }

  findByTitleContaining(value: string): Observable<Hateoas<Book>> {
    return this.http.get<Hateoas<Book>>(
      API + "/books/search/findAllByTitleContaining?title=" + value
    );
  }

  findByIdWithAuthors(id: string) {
    return this.http.get<any>(
      API + "/books/" + id + "?projection=" + BOOK_WITH_AUTHORS
    );
  }

  save(book: Book) {
    return this.http.post<any>(API + '/books', book);
  }

  uploadCover(file: File){
    let formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(API + '/upload/cover', formData);
  }
}
