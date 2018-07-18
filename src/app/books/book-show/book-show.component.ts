import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { BookService } from './../book.service';
import { Book } from '../book';

@Component({
    selector: 'lib-book-show',
    templateUrl: './book-show.component.html',
    styleUrls: ['./book-show.component.css']
})
export class BookShowComponent implements OnInit {
    book: Book = new Book();

    constructor (
        private bookService: BookService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void{
        this.book = this.activatedRoute.snapshot.data.book;
        this.findAuthors(this.book);
    }

    findAuthors(book: Book){
        this.bookService
            .findAuthorsByBookId(String(book.id))
            .subscribe(data => {
                this.book.authors = data._embedded.authors
            });
    }
}
