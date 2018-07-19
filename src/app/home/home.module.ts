import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './sign-in/sign-in.component';

import { VMessageModule } from './../utils/vmessage/vmessage.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule
  ],
  declarations: [
    SignInComponent
  ]
})
export class HomeModule { }
