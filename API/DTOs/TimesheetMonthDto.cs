using System;

namespace API.DTOs
{
    public class TimesheetMonthDto
    {
        public int TMonthId { get; set; }
        public int Year { get; set; }
        public int Month { get; set; }
        public float TotalHoursMonthly { get; set; }
        public bool Approved { get; set; }
        public int AppUserId { get; set; }

        public DateTime UpdateDate { get; set; }
        public DateTime CreateDate { get; set; }
    }
}