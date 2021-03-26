import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AppUser } from '../_models/appUser';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService, private router: Router) {
   }

  ngOnInit() {
;
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
    }, error => {
      console.log(error.error);
    })
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/')
  }



}
