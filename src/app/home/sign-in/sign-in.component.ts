import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../core/auth/auth.service";
import { UserService } from "./../../core/user/user.service";

@Component({
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  login() {
    const username = this.loginForm.get("username").value;
    const password = this.loginForm.get("password").value;

    this.auth.authenticate(username, password).subscribe(
      data => {
        this.userService.setToken(data.access_token);
        this.router.navigate([""]);
      },
      error => {
        console.log("Error!");
        this.loginForm.reset();
      }
    );
  }
}
