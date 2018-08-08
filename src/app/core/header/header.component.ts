import { Observable } from "rxjs";
import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

import { UserService } from "../user/user.service";
import { UserAuth } from "../interfaces/user-auth";

@Component({
  selector: "lib-header",
  styleUrls: ["./header.component.css"],
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  user$: Observable<UserAuth>;
  @Input() value: string = "";
  
  constructor(private userService: UserService, private router: Router) {
    this.user$ = this.userService.getUserAsObservable();
  }

  hasRole(role: string) {
    return this.userService.hasRole(role);
  }

  logout() {
    this.userService.logout();
    this.router.navigate(["/login"]);
  }

  login() {
    this.router.navigate(["/login"]);
  }
}
