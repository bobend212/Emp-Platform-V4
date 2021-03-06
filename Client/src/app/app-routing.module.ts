import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { HomeComponent } from './home/home.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ProjectDetailpageComponent } from './project-detailpage/project-detailpage.component';
import { ProjectsArchiveComponent } from './projects-archive/projects-archive.component';
import { ProjectsChartComponent } from './_charts/users-gender-doughnut/users-gender-doughnut.component';
import { ProjectsComponent } from './projects/projects.component';
import { RegisterComponent } from './register/register.component';
import { UnauthComponent } from './unauth/unauth.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UsersComponent } from './users/users.component';
import { AdminGuard } from './_guards/admin.guard';
import { AuthGuard } from './_guards/auth.guard';
import { TimesheetTableComponent } from './__timesheet/timesheet-table/timesheet-table.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'my-projects', component: MyProjectsComponent },
  { path: 'unauth', component: UnauthComponent },
  {
    path: 'projects/current',
    component: ProjectsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'projects/archive',
    component: ProjectsArchiveComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'projects/:id',
    component: ProjectDetailpageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  {
    path: 'timesheet',
    component: TimesheetTableComponent,
    canActivate: [AuthGuard],
  },
  { path: 'user/edit', component: UserEditComponent, canActivate: [AuthGuard] },
  {
    path: 'admin',
    component: AdminPanelComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
