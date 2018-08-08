import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";

import { UserService } from "../user/user.service";

@Injectable({
  providedIn: "root"
})
export class AdminOnlyGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.userService.hasRole("ROLE_ADMIN")) {
      this.router.navigate(["books"]);
      return false;
    }
    return true;
  }
}
