import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";

import { CategoryService } from "../category.service";
import { Category } from "../../core/interfaces/category";

@Component({
  templateUrl: "./category-all-in-one.component.html",
  styleUrls: ["./category-all-in-one.component.css"]
})
export class CategoryAllInOneComponent implements OnInit {
  categories: Category[];
  @Input()
  category: Category = {
    id: null,
    name: "",
    createdAt: null,
    updatedAt: null,
    deletedAt: null
  };

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.findAll();
  }

  disable(id) {
    this.categoryService.disable(id).subscribe(
      () => {
        this.findAll();
      },
      err => console.log(err)
    );
  }

  enable(id) {
    this.categoryService.enable(id).subscribe(
      () => {
        this.findAll();
      },
      err => console.log(err)
    );
  }

  findAll() {
    this.categoryService
      .findAll()
      .subscribe(data => (this.categories = data._embedded.content));
  }

  save() {
    this.categoryService.save(this.category).subscribe(
      () => {
        this.findAll();
      },
      err => console.log(err)
    );
  }

  update() {
    this.categoryService.update(this.category).subscribe(
      () => {
        this.findAll(), this.reset();
      },
      err => console.log(err)
    );
  }

  alterForm(category: Category) {
    this.category = category;
  }

  reset() {
    this.category = {
      id: null,
      name: "",
      createdAt: null,
      updatedAt: null,
      deletedAt: null
    };
  }
}
