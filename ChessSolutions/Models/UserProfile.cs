using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChessSolutions.Models
{
    public class UserProfile
    {
        public int id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string userName { get; set; }
        public string email { get; set; }
        public string firebaseId { get; set; }

    }
}
