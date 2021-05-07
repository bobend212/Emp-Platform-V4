using System;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class UserUpdateDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }

        public string Department { get; set; }

        [Phone]
        public string Phone { get; set; }
        public string Email { get; set; }
        public bool? HomeOffice { get; set; }
        public string Supervisor { get; set; }
    }
}