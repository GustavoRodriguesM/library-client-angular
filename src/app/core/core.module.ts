import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { HeaderComponent } from "./header/header.component";
import { RequestInterceptor } from "./auth/request.interceptor";
import { ExpiredTokenInterceptor } from "./auth/exp-token.interceptor";

import { AlertModule } from './../utils/components/alert/alert.module';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, RouterModule, FormsModule, AlertModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ExpiredTokenInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}
