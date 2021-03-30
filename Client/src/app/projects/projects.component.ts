import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NewProjectModalComponent } from '../_modals/new-project-modal/new-project-modal.component';
import { Project } from '../_models/project';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  dataSource: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['projectNumber', 'projectName', 'site', 'createDate', 'team', 'status', 'actions'];

  constructor(private projectsService: ProjectsService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadProjects() {
    this.projectsService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.dataSource = new MatTableDataSource(this.projects);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  onOpenDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "60%";
    dialogConfig.data = this.projects;
    let dialog = this.matDialog.open(NewProjectModalComponent, dialogConfig);

    dialog.afterClosed().subscribe(() => {
      this.loadProjects(); 
    });
  }

}
