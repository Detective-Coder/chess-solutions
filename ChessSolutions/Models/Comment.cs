using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ChessSolutions.Models
{
    public class Comment
    {
        [Required]
        public int id { get; set; }
        public int solutionId { get; set; }
        public int userProfileId { get; set; }
        public string content { get; set; }
        public string date { get; set; }
    }
}
