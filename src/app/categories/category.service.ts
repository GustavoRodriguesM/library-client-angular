import { Category } from './category';
import { TokenService } from './../core/token/token.service';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

const API = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor(
        private http: HttpClient,
        private tokenService: TokenService
    ){}

    findAll() {
        return this.http.get<any>(API + '/categories');
    }

    disable(id: number) {
        const headers = new HttpHeaders({ authorization : 'Bearer ' + this.tokenService.getToken()});
        return this.http.post<any>(API + '/categories/' + id + '/disable', {}, {headers: headers});
    }

    enable(id: number) {
        const headers = new HttpHeaders({ authorization : 'Bearer ' + this.tokenService.getToken()});
        return this.http.post<any>(API + '/categories/' + id + '/enable', {}, {headers: headers});
    }

    save(category: Category) {
        const headers = new HttpHeaders({ authorization : 'Bearer ' + this.tokenService.getToken()});
        return this.http.post<any>(API + '/categories', category, {headers: headers});
    }

    update(category: Category) {
        const headers = new HttpHeaders({ authorization : 'Bearer ' + this.tokenService.getToken()});
        return this.http.patch<any>(API + '/categories/' + category.id, category, {headers: headers});
    }


}