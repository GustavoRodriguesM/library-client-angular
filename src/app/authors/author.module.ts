import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AuthorShowComponent } from "./author-show/author-show.component";
import { AuthorListComponent } from "./author-list/author-list.component";
import { AuthorCreateComponent } from "./author-create/author-create.component";

import { VMessageModule } from "./../utils/vmessage/vmessage.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    VMessageModule
  ],
  declarations: [
    AuthorShowComponent,
    AuthorListComponent,
    AuthorCreateComponent
  ],
  exports: [AuthorShowComponent]
})
export class AuthorModule {}
