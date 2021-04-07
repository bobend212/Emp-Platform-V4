import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService, private router: Router) {
   }

  ngOnInit() {
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
