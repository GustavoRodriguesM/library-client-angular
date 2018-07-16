import { BookService } from './../book.service';
import { Component, OnInit } from "@angular/core";
import { Book } from '../book';

@Component({
    selector: 'lib-book-show',
    templateUrl: './book-show.component.html'
})
export class BookShowComponent implements OnInit {
    book: Book = new Book();

    constructor (
        private bookService: BookService
    ) {}

    ngOnInit(): void{
        this.bookService.findById("1").subscribe( data => {this.book = data});      
    }
}
