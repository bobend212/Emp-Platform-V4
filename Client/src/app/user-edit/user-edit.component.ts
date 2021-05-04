import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { AppUser } from '../_models/appUser';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  appUser: AppUser;
  user: User;

  constructor(private accountService: AccountService, private userService: UsersService) { 
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    this.loadAppUser();
  }

  loadAppUser() {
    this.userService.getUser(this.user.id).subscribe(appUser => {
      this.appUser = appUser;
    })
  }

  updateUser() {
    this.userService.updateUser(this.appUser).subscribe(() => {
      console.log('successfylly updated')
      window.location.reload();
    }, error => {
      console.log('error updating')
    })
    
  }

}
