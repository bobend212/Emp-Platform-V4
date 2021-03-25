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
    }
}