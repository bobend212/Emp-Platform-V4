using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using API.Extensions;
using Microsoft.AspNetCore.Identity;

namespace API.Models
{
    public class AppUser : IdentityUser<int>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Initials { get; set; }
        public string Department { get; set; }

        [Phone]
        public string Phone { get; set; }
        public bool? HomeOffice { get; set; }
        public DateTime? HireDate { get; set; }
        public string Supervisor { get; set; }
        public DateTime? UpdateDate { get; set; }
        public DateTime DateOfBirth { get; set; }
        public DateTime CreateDate { get; set; } = DateTime.Now;
        public DateTime LastActive { get; set; } = DateTime.Now;
        public string Gender { get; set; }

        public IList<UserProject> UserProject { get; set; }

        public ICollection<AppUserRole> UserRoles { get; set; }

        public int GetAge()
        {
            return DateOfBirth.CalculateAge();
        }
    }
}