import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from '../_models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get<Project[]>(this.baseUrl + 'projects');
  }

  getProject(projectId) {
    return this.http.get<Project>(this.baseUrl + 'projects/' + projectId);
  }

  getProjectsByUser(userId) {
    return this.http.get<Project[]>(this.baseUrl + 'projects/my-projects/' + userId);
  }

  addProject(model: any) {
    return this.http.post(this.baseUrl + 'projects/create', model);
  }

}
