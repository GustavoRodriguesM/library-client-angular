import { Observable } from 'rxjs';
import { HttpHandler } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';

@Injectable()
export class ExpiredTokenInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (this.userService.expiredToken()) {
      this.userService.logout();
    }
    return next.handle(req);
  }
}
