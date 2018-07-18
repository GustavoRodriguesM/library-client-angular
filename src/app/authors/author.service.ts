import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from './author';

const API = 'http://localhost:9000';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient){
  }

  findById(id : string): Observable<Author> {
      return this.http.get<Author>(API + '/authors/' + id);
  }

  findAll(): Observable<any> {
      return this.http.get<any>(API + '/authors');
  }
}
