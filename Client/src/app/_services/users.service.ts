import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppUser } from '../_models/appUser';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token
  })
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<AppUser[]>(this.baseUrl + 'users', httpOptions);
  }

  getUser(userId: number) {
    return this.http.get<AppUser>(this.baseUrl + 'users/' + userId, httpOptions);
  }
}
