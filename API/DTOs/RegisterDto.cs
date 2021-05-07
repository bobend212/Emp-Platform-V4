using System;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8)]
        [MinLength(3)]
        public string Password { get; set; }
        public DateTime HireDate { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Initials { get; set; }
        public string Department { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public bool? HomeOffice { get; set; }
        public string Supervisor { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Gender { get; set; }
    }
}