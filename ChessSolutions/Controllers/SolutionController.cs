using ChessSolutions.Models;
using ChessSolutions.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChessSolutions.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SolutionController : ControllerBase
    {
        private readonly ISolutionRepository _solutionRepository;
        public SolutionController(ISolutionRepository solutionRepository)
        {
            _solutionRepository = solutionRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_solutionRepository.GetAll());
        }

        [HttpPost]
        public IActionResult Post(Solution solution)
        {
            _solutionRepository.Add(solution);
            return CreatedAtAction("Get", new { id = solution.id }, solution);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _solutionRepository.Delete(id);
            return NoContent();
        }
    }
}
