import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthorService } from "./../../authors/author.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-book-create",
  templateUrl: "./book-create.component.html",
  styleUrls: ["./book-create.component.css"]
})
export class BookCreateComponent implements OnInit {
  authors: any[];
  bookCreateForm: FormGroup;

  constructor(
    private authorService: AuthorService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.authorService
      .findAll()
      .subscribe(data => (this.authors = data._embedded.authors));
    //TODO: Add cover, authors, categories fields.
    this.bookCreateForm = this.formBuilder.group({
      title: ["", Validators.required],
      description: ["", [Validators.required, Validators.maxLength(400)]],
      units: ["", Validators.required],
      isbn: ["", Validators.required]
    });
  }
}
