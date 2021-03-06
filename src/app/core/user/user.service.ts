import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import * as jwt_decode from "jwt-decode";

import { UserAuth } from "../interfaces/user-auth";
import { TokenService } from "../token/token.service";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private userSubject = new BehaviorSubject<UserAuth>(null);

  constructor(private tokenService: TokenService) {
    if (this.tokenService.hasToken()) this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.save(token);
    this.decodeAndNotify();
  }

  getUserAsObservable() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as UserAuth;
    this.userSubject.next(user);
  }

  public getUser() {
    const token = this.tokenService.getToken();
    if (token != null) return jwt_decode(token) as UserAuth;
    return null;
  }

  hasRole(role: string) {
    const user = this.getUser();
    let has = false;
    if (user != null) {
      user.authorities.forEach(authority => {
        if (role == authority) has = true;
      });
    }
    return has;
  }

  expiredToken() {
    if (!this.isLogged()) return false;

    const user = this.getUser();
    let expirationToken = new Date(user.exp * 1000);
    let timeNow = new Date();

    if (expirationToken.getTime() <= timeNow.getTime()) return true;
    else return false;
  }

  logout() {
    this.tokenService.logout();
    this.userSubject.next(null);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }
}
