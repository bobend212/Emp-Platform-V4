using System;
using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class TimesheetWeek
    {
        [Key]
        public int TWeekId { get; set; }
        public DateTime StartWeek { get; set; }
        public DateTime EndWeek { get; set; }
        public float TotalHoursWeekly { get; set; }

        public DateTime? UpdateDate { get; set; }
        public DateTime CreateDate { get; set; }

        public TimesheetMonth TMonth { get; set; }
        public int TMonthId { get; set; }


    }
}