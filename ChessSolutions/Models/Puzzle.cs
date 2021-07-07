using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace ChessSolutions.Models
{
    public class Puzzle
    {
        [Required]
        public int id { get; set; }
        [Required]
        public string name { get; set; }
        public string fileDirectory { get; set; }
        public string difficultyLevel { get; set; }
        public List<Solution> Solution { get; set; }
        
    }
}
