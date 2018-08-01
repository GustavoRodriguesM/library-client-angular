import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { SignInComponent } from "./sign-in/sign-in.component";

import { VMessageModule } from "./../utils/vmessage/vmessage.module";
import { SignUpComponent } from "./sign-up/sign-up.component";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule, VMessageModule],
  declarations: [SignInComponent, SignUpComponent]
})
export class HomeModule {}
