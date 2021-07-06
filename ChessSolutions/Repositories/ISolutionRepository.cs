using ChessSolutions.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChessSolutions.Repositories
{
    public interface ISolutionRepository
    {
        List<Solution> GetAll();
    }
}
