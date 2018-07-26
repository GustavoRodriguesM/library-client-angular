import { VMessageModule } from './../utils/vmessage/vmessage.module';
import { UtilsModule } from './../utils/utils.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { BookShowComponent } from './book-show/book-show.component';
import { BookListComponent } from './book-list/book-list.component';
import { BooksComponent } from './book-list/books/books.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { AuthorModule } from "../authors/author.module";
import { BookCreateComponent } from './book-create/book-create.component';

@NgModule({
    declarations: [ 
        BookShowComponent, 
        BookListComponent, 
        BooksComponent, 
        BookSearchComponent, 
        BookCreateComponent
    ],
    exports: [ 
        BookShowComponent, 
        BookListComponent 
    ],
    imports: [ 
        HttpClientModule,
        RouterModule,
        AuthorModule,
        ReactiveFormsModule,
        VMessageModule,
        FormsModule,
        CommonModule
    ]
})
export class BookModule {

}