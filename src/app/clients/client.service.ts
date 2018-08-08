import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Client } from './../core/interfaces/client';
import { Hateoas } from './../core/interfaces/hateoas';

const API = environment.apiUrl;

@Injectable({
  providedIn: "root"
})
export class ClientService {
  constructor(private http: HttpClient) {}

  findByUser(user: any) {
    return this.http.get<Hateoas<Client>>(
      API + "/clients/search/findByUser?user=" + API + "/users/" + user.id
    );
  }
}
