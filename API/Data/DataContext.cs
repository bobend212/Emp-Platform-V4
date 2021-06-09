using API.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : IdentityDbContext<AppUser, AppRole, int,
        IdentityUserClaim<int>, AppUserRole, IdentityUserLogin<int>,
        IdentityRoleClaim<int>, IdentityUserToken<int>>
    {
        public DataContext(DbContextOptions options) : base(options) { }
        public DbSet<Project> Projects { get; set; }

        public DbSet<TimesheetMonth> TimesheetMonths { get; set; }
        public DbSet<TimesheetWeek> TimesheetWeeks { get; set; }
        public DbSet<Timesheet> Timesheets { get; set; }

        public DbSet<UserProject> UsersProjects { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

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

            //

            builder.Entity<AppUser>()
                .HasMany(ur => ur.UserRoles)
                .WithOne(u => u.User)
                .HasForeignKey(ur => ur.UserId)
                .IsRequired();

            builder.Entity<AppRole>()
                .HasMany(ur => ur.UserRoles)
                .WithOne(u => u.Role)
                .HasForeignKey(ur => ur.RoleId)
                .IsRequired();
        }
    }
}