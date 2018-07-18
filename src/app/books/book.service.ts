import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = 'http://localhost:9000';
const BOOK_WITH_AUTHORS = 'bookWithAuthors';

@Injectable({
    providedIn: 'root'
})
export class BookService {

    constructor(private http: HttpClient){
    }

    findById(id : string): Observable<Book> {
        return this.http.get<Book>(API + '/books/' + id);
    }

    findAll(): Observable<any> {
        return this.http.get<any>(API + '/books');
    }

    findByTitleContaining(value: string): Observable<any>{
        return this.http.get<any>(API + '/books/search/findAllByTitleContaining?title=' + value);
    }

    findByIdWithAuthors(id : string) {
        return this.http.get<any>(API + '/books/' + id + '?projection=' + BOOK_WITH_AUTHORS);
    }
}