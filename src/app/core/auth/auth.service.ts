import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = "http://localhost:9000"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  authenticate (username: string, password: string): any {
    let headers: HttpHeaders = this.getClient();
    const url = API + '/oauth/token?grant_type=password&username=' + username + '&password=' + password;
    return this.http.post(url, {}, {headers: headers});
  }

  getClient(){
    const headers = new HttpHeaders({ authorization : 'Basic ' + btoa('web' + ':' + '123')});
    return headers;
  }
}
