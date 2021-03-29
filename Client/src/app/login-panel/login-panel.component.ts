import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService, private _snackBar: MatSnackBar) {
   }

  ngOnInit() {
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      this.openSnackBar('Logged In');
    }, error => {
      this.openSnackBar('Invalid credentials');
    })
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Dismiss', {
      duration: 4000
    });
  }

}
