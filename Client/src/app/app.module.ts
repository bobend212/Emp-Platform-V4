import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    ProjectsComponent,
    UsersComponent,
    UnauthComponent,
    ProjectCardComponent,
    ProjectDetailpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
