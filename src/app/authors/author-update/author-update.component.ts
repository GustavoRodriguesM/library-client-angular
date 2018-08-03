import { AuthorService } from "./../author.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Validators } from "@angular/forms";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

import { Author } from "./../author";

@Component({
  selector: "app-author-update",
  templateUrl: "./author-update.component.html",
  styleUrls: ["./author-update.component.css"]
})
export class AuthorUpdateComponent implements OnInit {
  authorUpdateForm: FormGroup;
  author: Author;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private authorService: AuthorService,
    private router: Router
  ) {}

  ngOnInit() {
    this.author = this.activatedRoute.snapshot.data.author;

    this.authorUpdateForm = this.formBuilder.group({
      name: [this.author.name, Validators.required],
      description: [this.author.description, Validators.required],
      birthday: [this.author.birthday, Validators.required]
    });
  }

  update() {
    const id = this.author.id;
    this.author = this.authorUpdateForm.getRawValue() as Author;
    this.author.id = id;
    this.authorService
      .update(this.author)
      .subscribe(() => {this.router.navigate(['/authors', this.author.id])}, err => console.log(err));
  }
}
