import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const API = environment.apiUrl;

@Injectable({
  providedIn: "root"
})
export class ClientService {
  constructor(private http: HttpClient) {}

  findByUser(user: any) {
    return this.http.get<any>(
      API + "/clients/search/findByUser?user=" + API + "/users/" + user.id
    );
  }
}
