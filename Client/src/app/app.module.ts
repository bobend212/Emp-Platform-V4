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
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ProjectCardComponent } from './project-card/project-card.component';
import {MatCardModule} from '@angular/material/card';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { ProjectDetailpageComponent } from './project-detailpage/project-detailpage.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HasRoleDirective } from './_directives/has-role.directive';
import { RoleManagementComponent } from './admin/role-management/role-management.component';
import {MatTabsModule} from '@angular/material/tabs';
import { EditRolesModalComponent } from './_modals/edit-roles-modal/edit-roles-modal.component';
import { LoginPanelComponent } from './login-panel/login-panel.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NewProjectModalComponent } from './_modals/new-project-modal/new-project-modal.component';
import { EditProjectModalComponent } from './_modals/edit-project-modal/edit-project-modal.component';
import { SidebarComponent } from './sidebar/sidebar.component';


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
    SidebarComponent
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
    MatSnackBarModule,
    MatTabsModule,
    ModalModule,
    MatBadgeModule,
    MatChipsModule,
    MatDialogModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    BsModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
