import { Injectable } from "@angular/core";

const TOKEN_FIELD = "access_token";

@Injectable({
  providedIn: "root"
})
export class TokenService {
  constructor() {}

  save(value: string) {
    window.localStorage.setItem(TOKEN_FIELD, value);
  }

  hasToken() {
    return !!this.getToken();
  }

  getToken() {
    if (!!window.localStorage.getItem(TOKEN_FIELD))
      return window.localStorage.getItem(TOKEN_FIELD);
    return null;
  }

  logout() {
    window.localStorage.removeItem(TOKEN_FIELD);
  }
}
