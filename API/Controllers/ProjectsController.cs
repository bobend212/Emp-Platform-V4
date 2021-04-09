using System;
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

        [HttpGet("current")]
        public async Task<ActionResult<IEnumerable<ProjectDto>>> GetCurrentProjects()
        {
            var projects = await _projectRepo.GetCurrentProjectsAsync();
            var projectstoReturn = _mapper.Map<IEnumerable<ProjectDto>>(projects);
            return Ok(projectstoReturn);
        }

        [HttpGet("archive")]
        public async Task<ActionResult<IEnumerable<ProjectDto>>> GetArchiveProjects()
        {
            var projects = await _projectRepo.GetArchiveProjectsAsync();
            var projectstoReturn = _mapper.Map<IEnumerable<ProjectDto>>(projects);
            return Ok(projectstoReturn);
        }

        [HttpGet("my-projects/{userId}")]
        public async Task<ActionResult<IEnumerable<ProjectDto>>> GetProjects(int userId)
        {
            var projects = await _projectRepo.GetProjectsByUserIdAsync(userId);
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

        [HttpDelete("{projectId}")]
        public async Task<ActionResult<Project>> DeleteProject(int projectId)
        {
            var project = await _projectRepo.GetProjectByIdAsync(projectId);
            if (project == null) return NotFound("Project doesn't exist");
            _projectRepo.DeleteProject(project);
            await _projectRepo.SaveAllAsync();
            return Ok();
        }

        [HttpPut("{projectId}")]
        public async Task<ActionResult> UpdateProject(int projectId, [FromBody] ProjectUpdateDto projectUpdateDto)
        {
            var findProject = await _projectRepo.GetProjectByIdAsync(projectId);
            if (findProject == null) return NotFound("Project doesn't exist");

            findProject.UpdateDate = DateTime.Now;

            var project = _mapper.Map(projectUpdateDto, findProject);
            _projectRepo.Update(project);
            await _projectRepo.SaveAllAsync();
            return Ok();
        }


    }
}