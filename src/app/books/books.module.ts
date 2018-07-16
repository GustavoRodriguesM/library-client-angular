import { HttpClientModule } from '@angular/common/http';
import { BookShowComponent } from './book-show/book-show.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
    declarations: [ BookShowComponent, BookListComponent ],
    exports: [ BookShowComponent, BookListComponent ],
    imports: [ 
        HttpClientModule,
        CommonModule
    ]
})
export class BookModule {

}