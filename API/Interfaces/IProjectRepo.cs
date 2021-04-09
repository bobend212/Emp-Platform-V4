using System.Collections.Generic;
using System.Threading.Tasks;
using API.Models;

namespace API.Interfaces
{
    public interface IProjectRepo
    {
        void Update(Project project);
        Task<bool> SaveAllAsync();
        Task<IEnumerable<Project>> GetCurrentProjectsAsync();
        Task<IEnumerable<Project>> GetArchiveProjectsAsync();
        Task<IEnumerable<Project>> GetProjectsByUserIdAsync(int userId);
        Task<Project> GetProjectByIdAsync(int id);
        Task<Project> FindProject(int projectId);
        void AddProject(Project project);
        void DeleteProject(Project project);
    }
}