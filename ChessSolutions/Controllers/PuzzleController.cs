using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChessSolutions.Repositories;
using ChessSolutions.Models;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace ChessSolutions.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PuzzleController : ControllerBase
    {
        private readonly IPuzzleRepository _puzzleRepository;
        public PuzzleController(IPuzzleRepository puzzleRepository)
        {
            _puzzleRepository = puzzleRepository;
        }
        
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_puzzleRepository.GetAll());
        }
    }
}
