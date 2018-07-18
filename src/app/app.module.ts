import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing.module';
import { UtilsModule } from './utils/utils.module';
import { BookModule } from './books/books.module';
import { ErrorsModule } from './errors/errors.module';
import { AuthorModule } from './authors/author.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UtilsModule,
    BrowserModule,
    ErrorsModule,
    BookModule,
    AuthorModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
