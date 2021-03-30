import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Project } from '../_models/project';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { ProjectsService } from '../_services/projects.service';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {
  projects: Project[];
  user: User;

  constructor(private projectService: ProjectsService, private userService: UsersService, private accountService: AccountService) { 
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    this.loadProjectsByUser();
  }

  loadProjectsByUser() {
    this.projectService.getProjectsByUser(this.user.id).subscribe(projects => {
      this.projects = projects;
    }, err => {
      console.log(err.error);
    })
  }


}
