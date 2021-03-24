import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppUser } from '../_models/appUser';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: AppUser[];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

}


