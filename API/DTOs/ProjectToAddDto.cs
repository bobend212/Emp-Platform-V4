using System;

namespace API.DTOs
{
    public class ProjectToAddDto
    {
        public string ProjectNumber { get; set; }
        public string ProjectName { get; set; }
        public string Plot { get; set; }
        public string Block { get; set; }
        public float? TimeEstimated { get; set; }
        public float? TimeExecuted { get; set; }
        public string Description { get; set; }
        public string Site { get; set; }
        public string Area { get; set; }
        public string Department { get; set; }
        public DateTime? PickUpDate { get; set; }
        public DateTime? SentDate { get; set; }
        public string Notes { get; set; }
        public int CreateBy { get; set; }
        public int UpdateBy { get; set; }
        public string Status { get; set; }
    }
}