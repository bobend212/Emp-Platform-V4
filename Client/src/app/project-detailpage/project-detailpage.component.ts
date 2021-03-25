import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../_models/project';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-project-detailpage',
  templateUrl: './project-detailpage.component.html',
  styleUrls: ['./project-detailpage.component.css']
})
export class ProjectDetailpageComponent implements OnInit {
  project: Project;

  constructor(private projectsService: ProjectsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProject();
  }

  loadProject() {
    this.projectsService.getProject(this.route.snapshot.paramMap.get('id')).subscribe(project => {
      this.project = project;
    })
  }

}
