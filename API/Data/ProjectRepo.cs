using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Interfaces;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class ProjectRepo : IProjectRepo
    {
        private readonly DataContext _context;
        public ProjectRepo(DataContext context)
        {
            _context = context;

        }

        public void AddProject(Project project)
        {
            _context.Projects.Add(project);
        }

        public async Task<Project> GetProjectByIdAsync(int id)
        {
            return await _context.Projects.Include(x => x.UserProject).ThenInclude(z => z.User).SingleOrDefaultAsync(m => m.ProjectId == id);
        }

        public async Task<IEnumerable<Project>> GetCurrentProjectsAsync()
        {
            return await _context.Projects.Include(x => x.UserProject).ThenInclude(z => z.User)
                .Where(x => x.Status == "No Status" || x.Status == "Active" || x.Status == "Checking" || x.Status == "Active - Slab" || x.Status == "Active - BRegs"
                || x.Status == "Active - FullSet" || x.Status == "Active - Issuing")
                .ToListAsync();
        }

        public async Task<IEnumerable<Project>> GetArchiveProjectsAsync()
        {
            return await _context.Projects.Include(x => x.UserProject).ThenInclude(z => z.User)
                .Where(x => x.Status == "Done" || x.Status == "Done - Sent" || x.Status == "Cancelled" || x.Status == "On Hold")
                .ToListAsync();
        }

        public async Task<IEnumerable<Project>> GetProjectsByUserIdAsync(int userId)
        {
            return await _context.UsersProjects.Where(c => c.UserId == userId).Select(x => x.Project).ToListAsync();
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public void Update(Project project)
        {
            _context.Entry(project).State = EntityState.Modified;
        }

        public void DeleteProject(Project project)
        {
            _context.Projects.Remove(project);
        }

        public async Task<Project> FindProject(int id)
        {
            return await _context.Projects.FindAsync(id);
        }
    }
}