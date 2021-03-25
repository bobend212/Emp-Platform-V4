using System.Linq;
using API.DTOs;
using API.Models;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            // Users
            CreateMap<AppUser, AppUserDto>()
                .ForMember(dto => dto.UserProject, c => c.MapFrom(c => c.UserProject.Select(cs => cs.Project)));
            CreateMap<Project, ProjectForUserDto>();
            CreateMap<UserProject, ProjectForUserDto>();
            CreateMap<UserUpdateDto, AppUser>();
            //

            // Projects
            CreateMap<Project, ProjectDto>()
                .ForMember(dto => dto.UserProject, c => c.MapFrom(c => c.UserProject.Select(cs => cs.User)));
            CreateMap<AppUser, UserForProjectDto>();
            CreateMap<UserProject, UserForProjectDto>()
                .ForMember(dto => dto.Id, opt => opt.MapFrom(x => x.UserId));
            //
            CreateMap<ProjectToAddDto, Project>();



        }
    }
}