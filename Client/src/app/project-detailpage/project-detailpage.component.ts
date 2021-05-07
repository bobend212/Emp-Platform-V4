import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from '../_models/appUser';
import { Project } from '../_models/project';
import { User } from '../_models/user';
import { ProjectsService } from '../_services/projects.service';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-project-detailpage',
  templateUrl: './project-detailpage.component.html',
  styleUrls: ['./project-detailpage.component.css'],
})
export class ProjectDetailpageComponent implements OnInit {
  project: Project;
  model: any = {};
  modelToDelete: any = {};
  users: AppUser[] = [];
  usersNotAssigned: AppUser[] = [];

  constructor(
    private projectsService: ProjectsService,
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadProject();
    this.loadUserListNotAssignedToProject();

    this.model = {
      projectId: +this.route.snapshot.paramMap.get('id'),
    };
    this.modelToDelete = {
      projectId: +this.route.snapshot.paramMap.get('id'),
    };
  }

  loadProject() {
    this.projectsService
      .getProject(this.route.snapshot.paramMap.get('id'))
      .subscribe((project) => {
        this.project = project;
      });
  }

  assignUserToProject(model) {
    this.usersService.addUserToProject(this.model).subscribe(
      () => {
        this.loadProject();
        this.loadUserListNotAssignedToProject();
      },
      (error) => {
        console.log(error.error);
        console.log(this.model);
      }
    );
  }

  deleteUserFromProject(userId) {
    this.usersService
      .deleteUserFromProject(+this.route.snapshot.paramMap.get('id'), userId)
      .subscribe(
        () => {
          this.loadUserListNotAssignedToProject();
          this.loadProject();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  loadUserListNotAssignedToProject() {
    this.usersService
      .getUsersListNotAssignedToSpecifiedProject(
        +this.route.snapshot.paramMap.get('id')
      )
      .subscribe(
        (users) => {
          this.users = users;
          this.usersNotAssigned = users;
        },
        (error) => {
          console.log(error.error);
        }
      );
  }
}
