import { Injectable } from '@angular/core';

const TOKEN_FIELD = 'access_token'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  save (value: string){
    window.localStorage.setItem(TOKEN_FIELD, value);
  }

  logged? () {
    return !!this.getToken();
  }

  getToken(){
    return window.localStorage.getItem(TOKEN_FIELD);
  }

  logout (){
    window.localStorage.removeItem(TOKEN_FIELD);
  }
}