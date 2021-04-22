import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppUser } from '../_models/appUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<AppUser[]>(this.baseUrl + 'users');
  }

  getUser(userId) {
    return this.http.get<AppUser>(this.baseUrl + 'users/' + userId);
  }

  updateUser(appUser: AppUser) {
    return this.http.put(this.baseUrl + 'users', appUser);
  }

  getUsersListNotAssignedToSpecifiedProject(projectId: number) {
    return this.http.get<any>(this.baseUrl + 'users/' + projectId + '/users-notassigned');
  }

  addUserToProject(model: any) {
    return this.http.post(this.baseUrl + 'userproject/user-project/', model);
  }

  deleteUserFromProject(projectId: any, userId: any): Observable<any> {

    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: { projectId, userId } }

    return this.http.delete(this.baseUrl + 'userproject/user-project/', options);
  }
}
