import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

import { Category } from "../core/interfaces/category";
import { Hateoas } from './../core/interfaces/hateoas';

const API = environment.apiUrl;

@Injectable({
  providedIn: "root"
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<Hateoas<Category>>(API + "/categories");
  }

  disable(id: number) {
    return this.http.post<any>( API + "/categories/" + id + "/disable", {});
  }

  enable(id: number) {
    return this.http.post<any>(  API + "/categories/" + id + "/enable", {});
  }

  save(category: Category) {
    return this.http.post<any>(API + "/categories", category);
  }

  update(category: Category) {
    return this.http.patch<any>(API + "/categories/" + category.id, category);
  }
}
