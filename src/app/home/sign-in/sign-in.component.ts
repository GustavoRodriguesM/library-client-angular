import { TokenService } from './../../core/token/token.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(){
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;

    this.auth
      .authenticate(username, password)
      .subscribe(data => {
        this.tokenService.save(data.access_token);
        this.router.navigate(['']);
      },error => {
        console.log("Error!");
        this.loginForm.reset();
      });
  }

}
