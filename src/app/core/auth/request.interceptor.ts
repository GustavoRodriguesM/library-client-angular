import { UserService } from '../user/user.service';
import { TokenService } from "../token/token.service";
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService, private userService: UserService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (this.tokenService.hasToken() && !this.userService.expiredToken()) {
      const token = this.tokenService.getToken();
      req = req.clone({
        setHeaders: {
          authorization: "Bearer " + token
        }
      });
    }
    return next.handle(req);
  }
}
