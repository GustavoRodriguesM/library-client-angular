import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookListComponent } from './books/book-list/book-list.component';
import { BookShowComponent } from './books/book-show/book-show.component';
import { BookSearchComponent } from './books/book-search/book-search.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/:id', component: BookShowComponent },
  { path: 'books/search/:value', component: BookSearchComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}


