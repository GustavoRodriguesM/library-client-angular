import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorShowComponent } from './author-show/author-show.component';
import { AuthorListComponent } from './author-list/author-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AuthorShowComponent,
    AuthorListComponent
  ],
  exports: [ AuthorShowComponent ]
})
export class AuthorModule { }
