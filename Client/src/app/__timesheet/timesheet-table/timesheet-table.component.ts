import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Timesheet } from 'src/app/_models/timesheet';

@Component({
  selector: 'app-timesheet-table',
  templateUrl: './timesheet-table.component.html',
  styleUrls: ['./timesheet-table.component.css'],
})
export class TimesheetTableComponent implements OnInit {
  timesheets: Timesheet[] = [
    {
      id: '1',
      project: 'Proj1',
      dates: [{ date: new Date(), time: 5 }],
    },
    // { id: '2', project: 'Proj1', date: new Date(2021, 8, 22), time: 5 },
    // { id: '3', project: 'Proj3', date: new Date(2015, 5, 5), time: 7 },
    // { id: '4', project: 'Proj4', date: new Date(), time: 10 },
    // { id: '5', project: 'Proj5', date: new Date(2015, 8, 9), time: 2 },
  ];

  currentDate: Date;
  myDate: Date;

  clonedTimesheets: { [s: string]: Timesheet } = {};

  constructor() {}

  ngOnInit() {
    this.timesheets;
    this.currentDate = new Date();
    this.myDate = new Date();
    this.myDate.setDate(this.myDate.getDate() + 1);

    console.log(this.currentDate.getDate());
  }

  onRowEditInit(timesheet: Timesheet) {
    this.clonedTimesheets[timesheet.id] = { ...timesheet };
  }

  onRowEditSave(timesheet: Timesheet) {
    if (timesheet.id !== '1') {
      delete this.clonedTimesheets[timesheet.id];
      console.log('success');
    } else {
      console.log('error');
    }
  }

  onRowEditCancel(timesheet: Timesheet, index: number) {
    this.timesheets[index] = this.clonedTimesheets[timesheet.id];
    delete this.clonedTimesheets[timesheet.id];
  }
}
