using System.Collections.Generic;
using System.Threading.Tasks;
using API.Models;

namespace API.Interfaces
{
    public interface IProjectRepo
    {
        void Update(Project project);
        Task<bool> SaveAllAsync();
        Task<IEnumerable<Project>> GetProjectsAsync();
        Task<IEnumerable<Project>> GetProjectsByUserIdAsync(int userId);
        Task<Project> GetProjectByIdAsync(int id);
        void AddProject(Project project);
    }
}