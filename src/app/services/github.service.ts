import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {


  constructor(private http: HttpClient) {}

  getDatos() {
    return this.http.get(`https://api.github.com/users/facundoaranda2002`);
  }
}
