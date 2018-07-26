import { NewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from '../../../environments/environment';

const API = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})
export class SignUpService {

    constructor(private http: HttpClient){}

    checkEmailTaken(email: string){
        return this.http.get<any>(API + '/users/exists/' + email);
    }

    register (user : NewUser) {
        return this.http.post(API + '/users', user);
    }

}