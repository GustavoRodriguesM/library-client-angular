import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing.module';
import { UtilsModule } from './utils/utils.module';
import { BookModule } from './books/books.module';
import { ErrorsModule } from './errors/errors.module';
import { AuthorModule } from './authors/author.module';
import { HomeModule } from './home/home.module';

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
    HomeModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
