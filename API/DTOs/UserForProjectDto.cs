using System;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class UserForProjectDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Initials { get; set; }
        public string Department { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        [Phone]
        public string Phone { get; set; }
        public bool? HomeOffice { get; set; }
        public DateTime? HireDate { get; set; }
        public string Supervisor { get; set; }
        public DateTime? UpdateDate { get; set; }
        public DateTime DateOfBirth { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime LastActive { get; set; }
        public string Gender { get; set; }
    }
}