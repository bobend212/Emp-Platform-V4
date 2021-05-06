import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { take } from 'rxjs/operators';
import { AppUser } from '../_models/appUser';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  appUser: AppUser;
  user: User;
  editUserForm: FormGroup;

  constructor(
    private accountService: AccountService,
    private userService: UsersService,
    private fb: FormBuilder
  ) {
    this.accountService.currentUser$
      .pipe(take(1))
      .subscribe((user) => (this.user = user));
  }

  ngOnInit() {
    this.loadAppUser();

    this.editUserForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      phone: [''],
      email: [''],
      gender: [''],
      department: [''],
      homeOffice: [false],
      supervisor: [''],
      hireDate: [null],
    });
  }

  loadAppUser() {
    this.userService.getUser(this.user.id).subscribe((appUser) => {
      this.appUser = appUser;

      this.editUserForm.setValue({
        firstName: appUser.firstName,
        lastName: appUser.lastName,
        phone: appUser.phone,
        email: appUser.email,
        gender: appUser.gender,
        department: appUser.department,
        homeOffice: appUser.homeOffice,
        supervisor: appUser.supervisor,
        hireDate: appUser.hireDate,
      });
    });
  }

  initializeForm() {}

  updateUser() {
    this.userService.updateUser(this.editUserForm.value).subscribe(
      () => {
        console.log('successfylly updated');
        window.location.reload();
      },
      (error) => {
        console.log('error updating');
        console.log(this.editUserForm.value);
      }
    );
  }
}
