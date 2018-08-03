import { BookService } from "./../book.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthorService } from "./../../authors/author.service";
import { Component, OnInit } from "@angular/core";
import { Book } from "../book";
import { Router } from "@angular/router";

@Component({
  selector: "app-book-create",
  templateUrl: "./book-create.component.html",
  styleUrls: ["./book-create.component.css"]
})
export class BookCreateComponent implements OnInit {
  authors: any[];
  book: Book;
  bookCreateForm: FormGroup;
  file: File;

  constructor(
    private authorService: AuthorService,
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.authorService
      .findAll()
      .subscribe(data => (this.authors = data._embedded.authors));
    //TODO: Add authors, categories fields.
    this.bookCreateForm = this.formBuilder.group({
      title: ["", Validators.required],
      description: ["", [Validators.required, Validators.maxLength(400)]],
      units: ["", Validators.required],
      isbn: ["", Validators.required],
      file: ["", Validators.required]
    });
  }

  test() {
    this.book = this.bookCreateForm.getRawValue() as Book;

    this.bookService.uploadCover(this.file).subscribe(data => {
      this.book.cover = data.cover;
      this.bookService.save(this.book).subscribe(data => {
        this.router.navigate(["books"]);
      });
    });
  }
}
