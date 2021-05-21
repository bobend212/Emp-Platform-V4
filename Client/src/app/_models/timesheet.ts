export interface Timesheet {
  id?: string;
  project: string;
  dates: TimesheetDate[];
}

export interface TimesheetDate {
  date: Date;
  time: number;
}
