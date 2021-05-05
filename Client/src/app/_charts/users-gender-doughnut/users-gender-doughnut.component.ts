import { Component, OnInit } from '@angular/core';
import { AppUser } from '../../_models/appUser';
import { UsersService } from '../../_services/users.service';

@Component({
  selector: 'app-users-gender-doughnut',
  templateUrl: './users-gender-doughnut.component.html',
  styleUrls: ['./users-gender-doughnut.component.css'],
})
export class ProjectsChartComponent implements OnInit {
  users: AppUser[];
  data: any;
  labelData: any[] = [];
  valueDataM: any[] = [];
  valueDataF: any[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  createChart() {}

  loadUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;

      for (let i = 0; i < this.users.length; i++) {
        if (users[i].gender == 'M') {
          this.valueDataM.push(users[i]);
        }
        if (users[i].gender == 'F') {
          this.valueDataF.push(users[i]);
        }
      }

      this.data = {
        labels: ['Male', 'Female'],
        datasets: [
          {
            data: [this.valueDataM.length, this.valueDataF.length],
            backgroundColor: ['#FF6384', '#36A2EB'],
          },
        ],
      };
    });
  }
}
