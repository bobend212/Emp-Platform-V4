using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Interfaces;
using API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ProjectsController : BaseApiController
    {
        private readonly IProjectRepo _projectRepo;
        private readonly IMapper _mapper;
        public ProjectsController(IProjectRepo projectRepo, IMapper mapper)
        {
            _mapper = mapper;
            _projectRepo = projectRepo;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProjectDto>>> GetProjects()
        {
            var projects = await _projectRepo.GetProjectsAsync();
            var projectstoReturn = _mapper.Map<IEnumerable<ProjectDto>>(projects);
            return Ok(projectstoReturn);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ProjectDto>> GetProject(int id)
        {
            var project = await _projectRepo.GetProjectByIdAsync(id);
            var projectToReturn = _mapper.Map<ProjectDto>(project);
            return projectToReturn;
        }

        [HttpPost("create")]
        public async Task<ActionResult<ProjectDto>> PostProject(ProjectToAddDto projectDto)
        {
            var project = _mapper.Map<Project>(projectDto);

            if (project.Status == null)
            {
                project.Status = "No Status";
            }

            _projectRepo.AddProject(project);
            await _projectRepo.SaveAllAsync();
            return Ok(project);
        }
    }
}