using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ChessSolutions.Models
{
    public class Solution
    {
        [Required]
        public int id { get; set; }
        [Required]
        public string content { get; set; }
        public int userProfileId { get; set; }
        public int puzzleId { get; set; }
        public string date { get; set; }
        public List<Comment> Comment { get; set; }
    }
}
