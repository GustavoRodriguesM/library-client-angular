import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { UtilsModule } from './utils/utils.module';
import { BookModule } from './books/books.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UtilsModule,
    BrowserModule,
    BookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
