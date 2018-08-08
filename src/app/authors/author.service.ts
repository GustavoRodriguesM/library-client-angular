import { Hateoas } from './../core/interfaces/hateoas';
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { TokenService } from "../core/token/token.service";
import { Author } from "../core/interfaces/author";

const API = environment.apiUrl;

@Injectable({
  providedIn: "root"
})
export class AuthorService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  findById(id: string): Observable<Author> {
    return this.http.get<Author>(API + "/authors/" + id);
  }

  findAll(): Observable<Hateoas<Author>> {
    return this.http.get<Hateoas<Author>>(API + "/authors/search/findAllByDeletedAt?");
  }

  findAllWithTrashed(): Observable<Hateoas<Author>> {
    return this.http.get<Hateoas<Author>>(API + "/authors");
  }

  save(author: Author) {
    return this.http.post<any>(API + "/authors", author);
  }

  update(author: Author): any {
    return this.http.put<any>(API + "/authors/" + author.id, author);
  }

  enable(id: string) {
    return this.http.post<any>(API + "/authors/" + id + "/enable", {});
  }

  disable(id: string) {
    return this.http.post<any>(API + "/authors/" + id + "/disable", {});
  }
}
