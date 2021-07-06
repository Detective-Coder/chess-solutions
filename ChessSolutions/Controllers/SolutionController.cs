using ChessSolutions.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChessSolutions.Controllers
{
    public class SolutionController : ControllerBase
    {
        private readonly ISolutionRepository _solutionRepository;
    }
}
