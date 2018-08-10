import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";

import { CategoryService } from "../category.service";
import { Category } from "../../core/interfaces/category";
import { AlertService } from "../../utils/components/alert/alert.service";

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

  constructor(
    private categoryService: CategoryService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.findAll();
  }

  disable(id) {
    this.categoryService.disable(id).subscribe(
      () => {
        this.alertService.success("Done!","Category disabled");
        this.findAll();
      },
      err => this.alertService.danger("Failed", "Error on execute operation")
    );
  }

  enable(id) {
    this.categoryService.enable(id).subscribe(
      () => {
        this.alertService.success("Done", "Category enabled");
        this.findAll();
      },
      err => this.alertService.danger("Failed", "Error on execute operation")
    );
  }

  findAll() {
    this.categoryService
      .findAll()
      .subscribe(
        data => (this.categories = data._embedded.content),
        err => this.alertService.danger("Failed", "Error on execute operation")
      );
  }

  save() {
    this.categoryService.save(this.category).subscribe(
      () => {
        this.alertService.success("Done", "Category saved");
        this.findAll();
      },
      err => this.alertService.danger("Failed", "Error on execute operation")
    );
  }

  update() {
    this.categoryService.update(this.category).subscribe(
      () => {
        this.alertService.success("Done", "Category updated");
        this.findAll(), this.reset();
      },
      err => this.alertService.danger("Failed", "Error on execute operation")
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
