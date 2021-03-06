import { AuthorUpdateResolver } from "./authors/author-update/author-update.resolver";
import { AuthorUpdateComponent } from "./authors/author-update/author-update.component";
import { AuthorCreateComponent } from "./authors/author-create/author-create.component";
import { AdminOnlyGuard } from "./core/auth/admin-only.guard";
import { BookCreateComponent } from "./books/book-create/book-create.component";
import { AuthGuard } from "./core/auth/auth.guard";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BookListComponent } from "./books/book-list/book-list.component";
import { BookShowComponent } from "./books/book-show/book-show.component";
import { BookSearchComponent } from "./books/book-search/book-search.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { AuthorShowComponent } from "./authors/author-show/author-show.component";
import { AuthorListComponent } from "./authors/author-list/author-list.component";
import { SignInComponent } from "./home/sign-in/sign-in.component";
import { SignUpComponent } from "./home/sign-up/sign-up.component";
import { CategoryAllInOneComponent } from "./categories/category-all-in-one/category-all-in-one.component";

import { BookShowResolver } from "./books/book-show/book-show.resolver";

const routes: Routes = [
  {
    path: "",
    component: BookListComponent
  },
  {
    path: "login",
    component: SignInComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "register",
    component: SignUpComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "books",
    component: BookListComponent
  },
  {
    path: "books/create",
    component: BookCreateComponent,
    canActivate: [AdminOnlyGuard]
  },
  {
    path: "books/:id",
    component: BookShowComponent,
    resolve: {
      book: BookShowResolver
    }
  },
  {
    path: "books/search/:value",
    component: BookSearchComponent
  },
  {
    path: "authors",
    component: AuthorListComponent
  },
  {
    path: "authors/create",
    component: AuthorCreateComponent,
    canActivate: [AdminOnlyGuard]
  },
  {
    path: "authors/:idAuthor/update",
    component: AuthorUpdateComponent,
    resolve: {
      author: AuthorUpdateResolver
    },
    canActivate: [AdminOnlyGuard]
  },
  {
    path: "authors/:idAuthor",
    component: AuthorShowComponent
  },
  {
    path: "categories",
    component: CategoryAllInOneComponent,
    canActivate: [AdminOnlyGuard]
  },
  {
    path: "not-found",
    component: NotFoundComponent
  },
  {
    path: "**",
    redirectTo: "not-found"
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { useHash: true })]
})
export class AppRoutingModule {}
