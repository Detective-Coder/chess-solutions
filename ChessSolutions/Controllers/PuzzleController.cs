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
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PuzzleController : ControllerBase
    {
        private readonly IPuzzleRepository _puzzleRepository;
        // GET: PuzzleController
        public ActionResult Index()
        {
            return View();
        }

        // GET: PuzzleController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: PuzzleController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: PuzzleController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: PuzzleController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: PuzzleController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: PuzzleController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: PuzzleController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
