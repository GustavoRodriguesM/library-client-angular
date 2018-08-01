import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { Book } from "./../book";
import { BookService } from "./../book.service";

@Injectable({
  providedIn: "root"
})
export class BookShowResolver implements Resolve<Observable<Book[]>> {
  constructor(private service: BookService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const id = route.params.id;
    return this.service.findByIdWithAuthors(id);
  }
}
