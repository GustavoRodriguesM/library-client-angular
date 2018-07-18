import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { BookShowComponent } from './book-show/book-show.component';
import { BookListComponent } from './book-list/book-list.component';
import { BooksComponent } from './book-list/books/books.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { AuthorModule } from "../authors/author.module";

@NgModule({
    declarations: [ 
        BookShowComponent, 
        BookListComponent, 
        BooksComponent, 
        BookSearchComponent
    ],
    exports: [ 
        BookShowComponent, 
        BookListComponent 
    ],
    imports: [ 
        HttpClientModule,
        RouterModule,
        AuthorModule,
        CommonModule
    ]
})
export class BookModule {

}