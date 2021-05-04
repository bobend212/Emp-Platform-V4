import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  registerForm: FormGroup;

  constructor(private accountService: AccountService, private fb: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      Username: ['', Validators.required],
      Password: [''],
      confirmPassword: ['', this.matchValues('Password')],
      hireDate: ['']
    })
    this.registerForm.controls.Password.valueChanges.subscribe(() => {
      this.registerForm.controls.confirmPassword.updateValueAndValidity();
    })
  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value ? null : {isMatching: true};
    }
  }

  register() {
    this.accountService.register(this.registerForm.value).subscribe(response => {
      console.log(response);
      console.log(this.model);
      this.openSnackBar('User successfully registered');
    }, error => {
      console.log(error.error);
      this.openSnackBar('Failed!');
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Dismiss', {
      duration: 4000
    });
  }

}
