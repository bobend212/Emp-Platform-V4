using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Interfaces;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class TimesheetRepo : ITimesheetRepo
    {
        private readonly DataContext _context;

        public TimesheetRepo(DataContext context)
        {
            _context = context;
        }

        public void AddTimesheetMonth(TimesheetMonth timesheetMonth)
        {
            _context.TimesheetMonths.Add(timesheetMonth);
        }

        public async Task<IEnumerable<TimesheetMonth>> GetTimesheetMonthsAsync()
        {
            return await _context.TimesheetMonths.ToListAsync();
        }

        public async Task<IEnumerable<TimesheetMonth>> GetTimesheetMonthsByUserAsync(int userId)
        {
            return await _context.TimesheetMonths.Where(c => c.AppUserId == userId).ToListAsync();
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}