import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { ConfirmMatchValidator } from '../../utils/validators/confirm-match.validator';

const API = environment.apiUrl;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerForm : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signUpService: SignUpService,
    private router: Router
  ) { }

  ngOnInit() {
    

    this.registerForm = this.formBuilder.group({
      name: ['', [
        Validators.required, 
        Validators.minLength(7)
      ]],
      email: ['', [
          Validators.required, 
          Validators.email
        ],
        this.userNotTakenValidatorService.checkEmailTaken()
      ],
      password: ['', [
          Validators.required, 
          Validators.minLength(7)
        ]
      ],
      passwordConfirmation: ['', [
          Validators.required, 
          Validators.minLength(7),
          ConfirmMatchValidator('password')
        ]
      ],
      birthday: ['', [Validators.required]]
    });
  }

  register() {
    const user: NewUser = this.registerForm.getRawValue() as NewUser;
    user.roles = [
    	API + "/roles/ROLE_USER", 
    	API + "/roles/ROLE_CLIENT"
    ];

    this.signUpService.register(user).subscribe(() => this.router.navigate(['login']));
  }

}
