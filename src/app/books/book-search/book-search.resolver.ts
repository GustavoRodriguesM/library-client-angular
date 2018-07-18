import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Book } from './../book';
import { BookService } from './../book.service';

@Injectable({
    providedIn: 'root'
})
export class BookSearchResolver implements Resolve<Observable<Book[]>> {

    constructor(
        private service: BookService
    ){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        const value = route.params.value;
        return this.service.findByTitleContaining(value);
    }

}