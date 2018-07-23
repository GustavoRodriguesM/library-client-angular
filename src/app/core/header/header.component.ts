import { UserAuth } from './../user/user-auth';
import { Observable } from 'rxjs';
import { UserService } from './../user/user.service';
import { Component, Input } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'lib-header',
    styleUrls: ['./header.component.css'],
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    user$: Observable<UserAuth>;
    @Input() value: string = '';

    constructor(
        private userService: UserService,
        private router: Router){
        this.user$ = this.userService.getUser();
    }

    logout(){
        this.userService.logout();
        this.router.navigate(['/login']);
    }

    login() {
        this.router.navigate(['/login']);
    }

    search(){
        this.router.navigate(['books/search', this.value]);
    }

}