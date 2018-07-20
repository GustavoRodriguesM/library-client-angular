import { UserAuth } from './user-auth';
import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import  * as jwt_decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private userSubject = new BehaviorSubject<UserAuth>(null);

    constructor(private tokenService: TokenService) { 
        if(this.tokenService.hasToken())
            this.decodeAndNotify();
    }

    setToken(token: string) {
        this.tokenService.save(token);
        this.decodeAndNotify();
    }

    getUser(){
        return this.userSubject.asObservable();
    }

    private decodeAndNotify(){
        const token = this.tokenService.getToken();
        const user = jwt_decode(token) as UserAuth;
        this.userSubject.next(user);
    }
}