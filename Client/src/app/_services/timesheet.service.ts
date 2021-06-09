import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TimesheetMonth } from '../_models/timesheet';

@Injectable({
  providedIn: 'root',
})
export class TimesheetService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getTimesheetMonthsByUser(userId) {
    return this.http.get<TimesheetMonth[]>(
      this.baseUrl + 'timesheet/' + userId
    );
  }

  addTimesheetMonth(model: any) {
    return this.http.post(this.baseUrl + 'timesheet/', model);
  }
}
