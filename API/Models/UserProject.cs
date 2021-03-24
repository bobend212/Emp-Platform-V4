namespace API.Models
{
    public class UserProject
    {
        public int UserId { get; set; }
        public AppUser User { get; set; }

        public int ProjectId { get; set; }
        public Project Project { get; set; }
    }
}