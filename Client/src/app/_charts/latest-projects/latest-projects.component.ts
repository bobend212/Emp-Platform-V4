import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/_models/project';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-latest-projects',
  templateUrl: './latest-projects.component.html',
  styleUrls: ['./latest-projects.component.css'],
})
export class LatestProjectsComponent implements OnInit {
  projects: Project[];
  tempProjectsAddedCurrentMonth: Project[] = [];
  currMonth: Date = new Date();

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.projectsService.getCurrentProjects().subscribe((projects) => {
      this.projects = projects;
      let currMonth = new Date().getUTCMonth() + 1;

      for (let i = 0; i < this.projects.length; i++) {
        if (new Date(projects[i].createDate).getUTCMonth() + 1 == currMonth) {
          this.tempProjectsAddedCurrentMonth.push(projects[i]);
        }
      }
    });
  }
}
