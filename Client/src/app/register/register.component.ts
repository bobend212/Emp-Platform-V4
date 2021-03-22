import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  register() {
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
    });
  }

}
