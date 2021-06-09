using System.Collections.Generic;
using System.Threading.Tasks;
using API.Models;

namespace API.Interfaces
{
    public interface ITimesheetRepo
    {
        Task<bool> SaveAllAsync();
        Task<IEnumerable<TimesheetMonth>> GetTimesheetMonthsAsync();
        Task<IEnumerable<TimesheetMonth>> GetTimesheetMonthsByUserAsync(int userId);
        void AddTimesheetMonth(TimesheetMonth timesheetMonth);
    }
}