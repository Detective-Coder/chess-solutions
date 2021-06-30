using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChessSolutions.Models;

namespace ChessSolutions.Repositories
{
    public interface IPuzzleRepository
    {
        List<Puzzle> GetAll();
        Puzzle GetById(int id);
    }
}
