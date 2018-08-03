import { Injectable } from "@angular/core";
import { RouterStateSnapshot } from "@angular/router";
import { ActivatedRouteSnapshot } from "@angular/router";

import { AuthorService } from "../author.service";

@Injectable({
  providedIn: "root"
})
export class AuthorUpdateResolver {
  constructor(private service: AuthorService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const id = route.params.idAuthor;
    return this.service.findById(id);
  }
}
