import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { CategoryAllInOneComponent } from './category-all-in-one/category-all-in-one.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [CategoryAllInOneComponent],
    imports: [ 
        CommonModule,
        RouterModule,
        FormsModule
    ],
    exports: []
})
export class CategoriesModule {}