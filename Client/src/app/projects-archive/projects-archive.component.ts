import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EditProjectModalComponent } from '../_modals/edit-project-modal/edit-project-modal.component';
import { NewProjectModalComponent } from '../_modals/new-project-modal/new-project-modal.component';
import { Project } from '../_models/project';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-projects-archive',
  templateUrl: './projects-archive.component.html',
  styleUrls: ['./projects-archive.component.css']
})
export class ProjectsArchiveComponent implements OnInit {
  projects: Project[];

  dataSource: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['projectNumber', 'projectName', 'site', 'createDate', 'team', 'status', 'actions', 'lastUpdate'];

  constructor(private projectsService: ProjectsService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadProjects() {
    this.projectsService.getArchiveProjects().subscribe(projects => {
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

  removeProject(project) {
    if (confirm('Are you sure?')) {
      this.projectsService.deleteProject(project.projectId).subscribe(() => {
        this.loadProjects();
      })
    }
  }

  editProject(project) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "60%";
    dialogConfig.data = project;

    console.log(project);
  
    let dialog = this.matDialog.open(EditProjectModalComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.loadProjects(); 
    });
  }

}
