using System;
using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class TimesheetMonth
    {
        [Key]
        public int TMonthId { get; set; }
        public int Year { get; set; }
        public int Month { get; set; }
        public float TotalHoursMonthly { get; set; }
        public bool Approved { get; set; }

        public DateTime? UpdateDate { get; set; }
        public DateTime CreateDate { get; set; }

        public AppUser AppUser { get; set; }
        public int AppUserId { get; set; }
    }
}