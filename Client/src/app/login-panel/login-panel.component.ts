import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css'],
})
export class LoginPanelComponent implements OnInit {
  model: any = {};

  constructor(
    public accountService: AccountService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  login() {
    this.accountService.login(this.model).subscribe(
      (response) => {
        this.toastr.success('You are logged in');
      },
      (error) => {
        this.toastr.error('Invalid credentials');
      }
    );
  }
}
