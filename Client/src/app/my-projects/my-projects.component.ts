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
  projects: Project[] = [];
  user: User;
  //projectsTemp: Project[];

  constructor(private projectService: ProjectsService, private userService: UsersService, private accountService: AccountService) { 
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    this.loadProjectsByUser();
  }

  loadProjectsByUser() {
    let projectsTemp = [];
    this.projectService.getProjectsByUser(this.user.id).subscribe(projects => {
      
      for (var index in projects) {
        if(projects[index].status == 'Active' || projects[index].status == 'No Status' 
        || projects[index].status == 'Active - Slab' || projects[index].status == 'Active - BRegs'
        || projects[index].status == 'Active - FullSet' || projects[index].status == 'Active - Issuing' || projects[index].status == 'Checking') {
          projectsTemp.push(projects[index]);
        }
      }
      this.projects = projectsTemp;
    }, err => {
      console.log(err.error);
    })
  }


}
