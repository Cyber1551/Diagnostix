using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;


namespace Diagnostix_Backend.Database.Models
{
    [Table("Cards")]
    public class CardDataModel
    {
        [Key]
        public int Id { get; set; }
        public string Email { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

    }
    public class CreateCard
    {
        public string Email { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
    }
}
