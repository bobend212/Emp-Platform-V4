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
            CreateMap<AppUser, AppUserDto>();
            CreateMap<Project, ProjectForUserDto>();
            CreateMap<UserProject, ProjectForUserDto>();
            //

            // Projects
            CreateMap<Project, ProjectDto>();
            CreateMap<AppUser, UserForProjectDto>();
            CreateMap<UserProject, UserForProjectDto>()
                .ForMember(dto => dto.Id, opt => opt.MapFrom(x => x.UserId));
            //
            CreateMap<ProjectToAddDto, Project>();



        }
    }
}