using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Interfaces;
using API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class TimesheetController : BaseApiController
    {
        private readonly ITimesheetRepo _timesheetRepo;
        private readonly IMapper _mapper;

        public TimesheetController(ITimesheetRepo timesheetRepo, IMapper mapper)
        {
            _timesheetRepo = timesheetRepo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TimesheetMonthDto>>> GetTimesheetMonths()
        {
            var months = await _timesheetRepo.GetTimesheetMonthsAsync();
            var monthsToReturn = _mapper.Map<IEnumerable<TimesheetMonthDto>>(months);
            return Ok(monthsToReturn);
        }

        [HttpGet("{userId}")]
        public async Task<ActionResult<IEnumerable<TimesheetMonthDto>>> GetTimesheetMonthsByUser(int userId)
        {
            var timesheetMonths = await _timesheetRepo.GetTimesheetMonthsByUserAsync(userId);
            var monthsToReturn = _mapper.Map<IEnumerable<TimesheetMonthDto>>(timesheetMonths);
            return Ok(monthsToReturn);
        }

        [HttpPost]
        public async Task<ActionResult<TimesheetMonthDto>> AddTimesheetMonth(TimesheetAddMonthDto timesheetMonthDto)
        {
            var timesheetMonth = _mapper.Map<TimesheetMonth>(timesheetMonthDto);
            timesheetMonth.CreateDate = DateTime.Now;

            _timesheetRepo.AddTimesheetMonth(timesheetMonth);
            await _timesheetRepo.SaveAllAsync();
            return Ok(timesheetMonth);
        }
    }
}