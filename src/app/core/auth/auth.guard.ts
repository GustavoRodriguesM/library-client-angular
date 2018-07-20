import { UserService } from './../user/user.service';
import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private userService: UserService,
        private router: Router
    ) {}

    canActivate(
        router: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean {

            if(this.userService.isLogged()) {
                this.router.navigate(['']);
                return false;
            }
        return true;
    }
}