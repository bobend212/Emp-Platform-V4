import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Project } from 'src/app/_models/project';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-edit-project-modal',
  templateUrl: './edit-project-modal.component.html',
  styleUrls: ['./edit-project-modal.component.css'],
})
export class EditProjectModalComponent implements OnInit {
  newProjectForm: FormGroup;
  formattedDate: any;

  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private projectService: ProjectsService,
    public dialogRef: MatDialogRef<EditProjectModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  convertDateFormat(date: Date, other: any): string {
    if (date == null) return other;
    this.formattedDate = date.toString().split('T')[0];
    return this.formattedDate;
  }

  initializeForm() {
    this.newProjectForm = this.fb.group({
      projectNumber: [this.data.projectNumber],
      projectName: [this.data.projectName],
      status: [this.data.status],
      plot: [this.data.plot],
      block: [this.data.block],
      site: [this.data.site],
      description: [this.data.description],
      comments: [this.data.comments],
      orderPlaced: [
        this.convertDateFormat(this.data.orderPlaced, this.data.orderPlaced),
      ],
      designInfo: [this.data.designInfo],
      drgsReceived: [this.data.drgsReceived],
      engReceived: [this.data.engReceived],
      deliveryDate: [
        this.convertDateFormat(this.data.deliveryDate, this.data.deliveryDate),
      ],
      slabStageStatus: [this.data.slabStageStatus],
      bRegsStageStatus: [this.data.bRegsStageStatus],
      productionStageStatus: [this.data.productionStageStatus],
      issued: [this.data.issued],
      slabRequiredDate: [
        this.convertDateFormat(
          this.data.slabRequiredDate,
          this.data.slabRequiredDate
        ),
      ],
      slabIssuedDate: [
        this.convertDateFormat(
          this.data.slabIssuedDate,
          this.data.slabIssuedDate
        ),
      ],
      bRegsRequiredDate: [
        this.convertDateFormat(
          this.data.bRegsRequiredDate,
          this.data.bRegsRequiredDate
        ),
      ],
      bRegsIssuedDate: [
        this.convertDateFormat(
          this.data.bRegsIssuedDate,
          this.data.bRegsIssuedDate
        ),
      ],
      fullSetRequiredDate: [
        this.convertDateFormat(
          this.data.fullSetRequiredDate,
          this.data.fullSetRequiredDate
        ),
      ],
      fullSetIssuedDate: [
        this.convertDateFormat(
          this.data.fullSetIssuedDate,
          this.data.fullSetIssuedDate
        ),
      ],
      issuingRequiredDate: [
        this.convertDateFormat(
          this.data.issuingRequiredDate,
          this.data.issuingRequiredDate
        ),
      ],
      issuingIssuedDate: [
        this.convertDateFormat(
          this.data.issuingIssuedDate,
          this.data.issuingIssuedDate
        ),
      ],
    });
  }

  editProject() {
    this.projectService
      .editProject(this.data.projectId, this.newProjectForm.value)
      .subscribe(
        (response) => {
          this.toastr.success('Project updated');
          this.dialogRef.close();
        },
        (error) => {
          this.toastr.error('Project not updated');
        }
      );
  }
}
