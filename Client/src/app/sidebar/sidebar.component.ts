import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { AppUser } from '../_models/appUser';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  model: any = {};
  appUser: AppUser;
  user: User;

  constructor(
    public accountService: AccountService,
    private router: Router,
    private userService: UsersService,
    private toastr: ToastrService
  ) {
    this.accountService.currentUser$
      .pipe(take(1))
      .subscribe((user) => (this.user = user));
  }

  ngOnInit() {
    this.loadAppUser();
  }

  loadAppUser() {
    this.userService.getUser(this.user.id).subscribe((appUser) => {
      this.appUser = appUser;
    });
  }

  login() {
    this.accountService.login(this.model).subscribe(
      (response) => {},
      (error) => {
        console.log(error.error);
      }
    );
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
    this.toastr.success('Logged out');
  }
}
