import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthorService } from "../author.service";
import { Author } from "../../core/interfaces/author";

@Component({
  selector: "app-author-create",
  templateUrl: "./author-create.component.html",
  styleUrls: ["./author-create.component.css"]
})
export class AuthorCreateComponent implements OnInit {
  authorCreateForm: FormGroup;
  author: Author;

  constructor(
    private formBuilder: FormBuilder,
    private authorService: AuthorService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authorCreateForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      birthday: ["", Validators.required]
    });
  }

  save() {
    this.author = this.authorCreateForm.getRawValue() as Author;
    this.authorService.save(this.author).subscribe(
      () => {
        this.router.navigate(["/authors"]);
      },
      err => console.log(err)
    );
  }
}
