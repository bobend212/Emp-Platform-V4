import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Project } from 'src/app/_models/project';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-new-project-modal',
  templateUrl: './new-project-modal.component.html',
  styleUrls: ['./new-project-modal.component.css']
})
export class NewProjectModalComponent implements OnInit {
  
  newProjectForm: FormGroup;
  projects: Project[];
  dataSource: any;
  title: string = "New Project";
  
  constructor(private fb: FormBuilder, private projectService: ProjectsService, 
    public dialogRef: MatDialogRef<NewProjectModalComponent>) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.newProjectForm = this.fb.group({
      projectNumber: [''],
      projectName: [''],
      status: ['']
    })
  }

  addProject() {
    this.projectService.addProject(this.newProjectForm.value).subscribe(response => {
      console.log(response);
      this.dialogRef.close();
    }, error => {
      console.log(error.error);
      console.log(error);
    });
  }



}
