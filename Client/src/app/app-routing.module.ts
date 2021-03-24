import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { RegisterComponent } from './register/register.component';
import { UnauthComponent } from './unauth/unauth.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './_guards/auth.guard';


const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'unauth', component: UnauthComponent},
  {path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
