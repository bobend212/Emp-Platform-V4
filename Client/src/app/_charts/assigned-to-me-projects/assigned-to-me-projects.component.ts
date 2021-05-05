import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Project } from 'src/app/_models/project';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { ProjectsService } from 'src/app/_services/projects.service';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-assigned-to-me-projects',
  templateUrl: './assigned-to-me-projects.component.html',
  styleUrls: ['./assigned-to-me-projects.component.css'],
})
export class AssignedToMeProjectsComponent implements OnInit {
  projects: Project[] = [];
  user: User;

  constructor(
    private projectService: ProjectsService,
    private accountService: AccountService
  ) {
    this.accountService.currentUser$
      .pipe(take(1))
      .subscribe((user) => (this.user = user));
  }

  ngOnInit(): void {
    this.loadProjectsByUser();
  }

  loadProjectsByUser() {
    let projectsTemp = [];
    this.projectService.getProjectsByUser(this.user.id).subscribe(
      (projects) => {
        for (var index in projects) {
          if (
            projects[index].status == 'Active' ||
            projects[index].status == 'No Status' ||
            projects[index].status == 'Active - Slab' ||
            projects[index].status == 'Active - BRegs' ||
            projects[index].status == 'Active - FullSet' ||
            projects[index].status == 'Active - Issuing' ||
            projects[index].status == 'Checking'
          ) {
            projectsTemp.push(projects[index]);
          }
        }
        this.projects = projectsTemp;
      },
      (err) => {
        console.log(err.error);
      }
    );
  }
}
