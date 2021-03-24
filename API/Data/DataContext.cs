using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options) { }

        public DbSet<AppUser> Users { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<UserProject> UsersProjects { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<UserProject>()
                .HasKey(t => new { t.UserId, t.ProjectId });

            builder.Entity<UserProject>()
                .HasOne(pt => pt.User)
                .WithMany(p => p.UserProject)
                .HasForeignKey(pt => pt.UserId);

            builder.Entity<UserProject>()
                .HasOne(pt => pt.Project)
                .WithMany(t => t.UserProject)
                .HasForeignKey(pt => pt.ProjectId);
        }
    }
}