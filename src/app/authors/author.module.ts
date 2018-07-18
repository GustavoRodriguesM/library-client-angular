import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorShowComponent } from './author-show/author-show.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AuthorShowComponent
  ],
  exports: [ AuthorShowComponent ]
})
export class AuthorModule { }
