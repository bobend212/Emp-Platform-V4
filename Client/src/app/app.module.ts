import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';

import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';
import { UnauthComponent } from './unauth/unauth.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProjectCardComponent } from './project-card/project-card.component';
import { MatCardModule } from '@angular/material/card';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { ProjectDetailpageComponent } from './project-detailpage/project-detailpage.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { HasRoleDirective } from './_directives/has-role.directive';
import { RoleManagementComponent } from './admin/role-management/role-management.component';
import { MatTabsModule } from '@angular/material/tabs';
import { EditRolesModalComponent } from './_modals/edit-roles-modal/edit-roles-modal.component';
import { LoginPanelComponent } from './login-panel/login-panel.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NewProjectModalComponent } from './_modals/new-project-modal/new-project-modal.component';
import { EditProjectModalComponent } from './_modals/edit-project-modal/edit-project-modal.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ProjectsArchiveComponent } from './projects-archive/projects-archive.component';
import { DropdownModule } from 'primeng/dropdown';
import { ProjectsChartComponent } from './_charts/users-gender-doughnut/users-gender-doughnut.component';
import { HomeComponent } from './home/home.component';
import { ChartModule } from 'primeng/chart';
import { LatestProjectsComponent } from './_charts/latest-projects/latest-projects.component';
import { AssignedToMeProjectsComponent } from './_charts/assigned-to-me-projects/assigned-to-me-projects.component';
import { IssuedProjectsChartComponent } from './_charts/issued-projects-chart/issued-projects-chart.component';
import { ToastrModule } from 'ngx-toastr';
import { TimesheetTableComponent } from './__timesheet/timesheet-table/timesheet-table.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    ProjectsComponent,
    UsersComponent,
    UnauthComponent,
    ProjectCardComponent,
    ProjectDetailpageComponent,
    UserEditComponent,
    AdminPanelComponent,
    HasRoleDirective,
    RoleManagementComponent,
    EditRolesModalComponent,
    LoginPanelComponent,
    MyProjectsComponent,
    NewProjectModalComponent,
    EditProjectModalComponent,
    SidebarComponent,
    ProjectsArchiveComponent,
    ProjectsChartComponent,
    HomeComponent,
    LatestProjectsComponent,
    AssignedToMeProjectsComponent,
    IssuedProjectsChartComponent,
    TimesheetTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTabsModule,
    ModalModule,
    MatBadgeModule,
    MatChipsModule,
    MatDialogModule,
    TagModule,
    ButtonModule,
    DropdownModule,
    ChartModule,
    TableModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    BsModalService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
