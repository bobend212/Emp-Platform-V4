using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Interfaces;
using API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class UsersController : BaseApiController
    {
        private readonly IUserRepo _userRepo;
        private readonly IMapper _mapper;
        private readonly DataContext _context;
        private readonly IProjectRepo _projectRepo;
        public UsersController(IUserRepo userRepo, IMapper mapper, IProjectRepo projectRepo, DataContext context)
        {
            _projectRepo = projectRepo;
            _context = context;
            _mapper = mapper;
            _userRepo = userRepo;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUserDto>>> GetUsers()
        {
            var users = await _userRepo.GetUsersAsync();
            var usersToReturn = _mapper.Map<IEnumerable<AppUserDto>>(users);
            return Ok(usersToReturn);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AppUserDto>> GetUserById(int id)
        {
            var user = await _userRepo.GetUserByIdAsync(id);
            var userToReturn = _mapper.Map<AppUserDto>(user);
            return Ok(userToReturn);
        }

        [HttpPut]
        public async Task<ActionResult> UpdateUser(UserUpdateDto userUpdateDto)
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
            //var username = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var user = await _userRepo.GetUserByIdAsync(userId);

            _mapper.Map(userUpdateDto, user);
            _userRepo.Update(user);

            if (await _userRepo.SaveAllAsync()) return NoContent();

            return BadRequest("Failed to update user");
        }

        [HttpGet("{projectId}/users")]
        [Description("Get list of users assigned to a specified project.")]
        public async Task<ActionResult> GetProjectUsers(int projectId)
        {
            if (!ProjectExist(projectId)) return NotFound("Project doesn't exist");
            var project = await _projectRepo.GetProjectByIdAsync(projectId);
            var users = project.UserProject.Select(x => x.User).ToList();
            var usersDto = _mapper.Map<ICollection<UserForProjectDto>>(users);
            return Ok(usersDto);
        }


        [HttpGet("{projectId}/users-notassigned")]
        [Description("Get list of users NOT assigned to a specified project.")]
        public async Task<ActionResult> GetProjectUsersNotAssigned(int projectId)
        {
            if (!ProjectExist(projectId)) return NotFound("Project doesn't exist");

            var project = await _projectRepo.GetProjectByIdAsync(projectId);

            var users1 = project.UserProject.Select(x => x.User).ToList();
            var users2 = await _userRepo.GetUsersAsync();

            var result = users2.Where(p => !users1.Any(p2 => p2.Id == p.Id));

            var usersDto = _mapper.Map<ICollection<UserForProjectDto>>(result);

            return Ok(usersDto);
        }

        private bool ProjectExist(int id) => _context.Projects.Any(e => e.ProjectId == id);
    }
}