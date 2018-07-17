import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BookShowComponent } from './book-show/book-show.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BooksComponent } from './book-list/books/books.component';

@NgModule({
    declarations: [ 
        BookShowComponent, 
        BookListComponent, 
        BooksComponent ],
    exports: [ 
        BookShowComponent, 
        BookListComponent ],
    imports: [ 
        HttpClientModule,
        RouterModule,
        CommonModule,
    ]
})
export class BookModule {

}