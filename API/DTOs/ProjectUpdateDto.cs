using System;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class ProjectUpdateDto
    {
        public string ProjectNumber { get; set; }
        public string ProjectName { get; set; }
        public string Status { get; set; }

        public string Plot { get; set; }
        public string Block { get; set; }
        public string Site { get; set; }

        public string Description { get; set; }
        public string Comments { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:dd/mm/yyyy}")]
        public DateTime? OrderPlaced { get; set; }
        public string DesignInfo { get; set; }
        public bool? DrgsReceived { get; set; }
        public bool? EngReceived { get; set; }
        public string SlabStageStatus { get; set; }
        public string BRegsStageStatus { get; set; }
        public string ProductionStageStatus { get; set; }
        public bool? Issued { get; set; }
        public DateTime? SlabRequiredDate { get; set; }
        public DateTime? SlabIssuedDate { get; set; }
        public DateTime? BRegsRequiredDate { get; set; }
        public DateTime? BRegsIssuedDate { get; set; }
        public DateTime? FullSetRequiredDate { get; set; }
        public DateTime? FullSetIssuedDate { get; set; }
        public DateTime? IssuingRequiredDate { get; set; }
        public DateTime? IssuingIssuedDate { get; set; }
        public DateTime? DeliveryDate { get; set; }
    }
}