import { UserAuth } from './../user/user-auth';
import { Observable } from 'rxjs';
import { UserService } from './../user/user.service';
import { Component } from "@angular/core";

@Component({
    selector: 'lib-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    user$: Observable<UserAuth>;

    constructor(userService: UserService){
        this.user$ = userService.getUser();
    }

}