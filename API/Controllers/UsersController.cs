using System.Collections.Generic;
using System.Linq;
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
        public UsersController(IUserRepo userRepo, IMapper mapper)
        {
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

        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<AppUserDto>> GetUser(int id)
        {
            var user = await _userRepo.GetUserByIdAsync(id);
            var userToReturn = _mapper.Map<AppUserDto>(user);
            return userToReturn;
        }
    }
}