import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { take } from 'rxjs/operators';
import { TimesheetMonth } from 'src/app/_models/timesheet';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { TimesheetService } from 'src/app/_services/timesheet.service';

@Component({
  selector: 'app-timesheet-table',
  templateUrl: './timesheet-table.component.html',
  styleUrls: ['./timesheet-table.component.css'],
})
export class TimesheetTableComponent implements OnInit {
  // startWeek: Date;
  // endWeek: Date;
  // dates = [];
  // currentDate = new Date();
  timesheetMonths: TimesheetMonth[] = [];
  user: User;

  constructor(
    private timesheetService: TimesheetService,
    private accountService: AccountService
  ) {
    this.accountService.currentUser$
      .pipe(take(1))
      .subscribe((user) => (this.user = user));
  }

  ngOnInit() {
    // this.setWeek(this.currentDate);
    // this.getDatesBetweenDates(this.startWeek, this.endWeek);
    this.loadTimesheetMonthsByUser();
  }

  loadTimesheetMonthsByUser() {
    this.timesheetService.getTimesheetMonthsByUser(this.user.id).subscribe(
      (timesheetMonths) => {
        this.timesheetMonths = timesheetMonths;
      },
      (err) => {
        console.log(err.error);
      }
    );
  }

  // setWeek(date: Date) {
  //   date = new Date(date);
  //   let day = date.getDay(),
  //     diff = date.getDate() - day + (day == 0 ? -6 : 1),
  //     addDays = date.getDate() - day + 7;

  //   this.startWeek = new Date(date.setDate(diff));
  //   this.endWeek = new Date(date.setDate(addDays));
  // }

  // nextWeek() {
  //   let nextWeekDate = this.startWeek;
  //   nextWeekDate.setDate(nextWeekDate.getDate() + 7);
  //   this.setWeek(nextWeekDate);
  //   this.dates = [];
  //   this.getDatesBetweenDates(this.startWeek, this.endWeek);
  // }

  // prevWeek() {
  //   let lastWeekDate = this.startWeek;
  //   lastWeekDate.setDate(lastWeekDate.getDate() - 7);
  //   this.setWeek(lastWeekDate);
  //   this.dates = [];
  //   this.getDatesBetweenDates(this.startWeek, this.endWeek);
  // }

  // setCurrentWeek() {
  //   this.setWeek(this.currentDate);
  //   this.dates = [];
  //   this.getDatesBetweenDates(this.startWeek, this.endWeek);
  // }

  // getDatesBetweenDates(startDate, endDate) {
  //   //let dates = [];
  //   //to avoid modifying the original date
  //   const theDate = new Date(startDate);
  //   while (theDate <= endDate) {
  //     this.dates = [...this.dates, new Date(theDate)];
  //     console.log(theDate);
  //     theDate.setDate(theDate.getDate() + 1);
  //   }
  // }
}
