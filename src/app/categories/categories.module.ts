import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { CategoryAllInOneComponent } from "./category-all-in-one/category-all-in-one.component";

@NgModule({
  declarations: [CategoryAllInOneComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: []
})
export class CategoriesModule {}
