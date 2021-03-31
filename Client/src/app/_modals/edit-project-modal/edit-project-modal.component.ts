import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from 'src/app/_models/project';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-edit-project-modal',
  templateUrl: './edit-project-modal.component.html',
  styleUrls: ['./edit-project-modal.component.css']
})
export class EditProjectModalComponent implements OnInit {
  newProjectForm: FormGroup;

  constructor(private fb: FormBuilder, private projectService: ProjectsService, 
    public dialogRef: MatDialogRef<EditProjectModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.newProjectForm = this.fb.group({
      projectNumber: [this.data.projectNumber],
      projectName: [this.data.projectName]
    })
  }

  editProject() {
    this.projectService.editProject(this.data.projectId, this.newProjectForm.value).subscribe(response => {
      console.log('successfully updated');
      this.dialogRef.close();
    }, error => {
      console.log(error);
    })
  }

}
