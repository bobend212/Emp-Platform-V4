using System;

namespace API.Models
{
    public class Timesheet
    {
        public int TimesheetId { get; set; }
        public DateTime Date { get; set; }
        public string Project { get; set; }
        public float Time { get; set; }

        public DateTime? UpdateDate { get; set; }
        public DateTime CreateDate { get; set; }

        public TimesheetWeek TWeek { get; set; }
        public int TWeekId { get; set; }
    }
}