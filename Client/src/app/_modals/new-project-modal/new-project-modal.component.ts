import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectsComponent } from 'src/app/projects/projects.component';
import { Project } from 'src/app/_models/project';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-new-project-modal',
  templateUrl: './new-project-modal.component.html',
  styleUrls: ['./new-project-modal.component.css']
})
export class NewProjectModalComponent implements OnInit {
  
  model: any = {};
  newProjectForm: FormGroup;
  projects: Project[];
  dataSource: any;
  
  constructor(private fb: FormBuilder, private projectService: ProjectsService, public dialogRef: MatDialogRef<NewProjectModalComponent>) { 
    }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.newProjectForm = this.fb.group({
      projectNumber: [''],
      projectName: ['']
    })
  }

  addProject() {
    this.projectService.addProject(this.newProjectForm.value).subscribe(response => {
      console.log(response);
      console.log(this.model);
      this.dialogRef.close();
    }, error => {
      console.log(error.error);
      console.log(error);
    });
  }

}
