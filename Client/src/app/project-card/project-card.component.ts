import { Component, Input, OnInit } from '@angular/core';
import { AppUser } from '../_models/appUser';
import { Project } from '../_models/project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;

  constructor() { }

  ngOnInit(): void {
  }

}
