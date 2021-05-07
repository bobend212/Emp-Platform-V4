import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  model: any = {};
  registerForm: FormGroup;

  constructor(
    private accountService: AccountService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      Username: ['', Validators.required],
      Password: [''],
      confirmPassword: ['', this.matchValues('Password')],
      hireDate: [''],
      firstName: [''],
      lastName: [''],
      initials: [''],
      department: [''],
      phone: [''],
      email: [''],
      homeOffice: [''],
      supervisor: [''],
      dateOfBirth: [''],
      gender: [''],
    });
    this.registerForm.controls.Password.valueChanges.subscribe(() => {
      this.registerForm.controls.confirmPassword.updateValueAndValidity();
    });
  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value
        ? null
        : { isMatching: true };
    };
  }

  register() {
    this.accountService.register(this.registerForm.value).subscribe(
      (response) => {
        console.log(response);
        console.log(this.model);
        this.toastr.success('User successfully registered');
      },
      (error) => {
        console.log(error.error);
        this.toastr.error('Failed!');
      }
    );
  }
}
