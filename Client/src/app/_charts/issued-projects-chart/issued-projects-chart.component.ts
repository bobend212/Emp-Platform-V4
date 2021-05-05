import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issued-projects-chart',
  templateUrl: './issued-projects-chart.component.html',
  styleUrls: ['./issued-projects-chart.component.css'],
})
export class IssuedProjectsChartComponent implements OnInit {
  basicData: any;
  basicOptions: any;

  constructor() {}

  ngOnInit(): void {
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#42A5F5',
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#FFA726',
        },
      ],
    };
  }
}
