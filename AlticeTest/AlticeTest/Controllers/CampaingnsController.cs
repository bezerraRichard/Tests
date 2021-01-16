using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AlticeTest.Data;
using AlticeTest.Model;

namespace AlticeTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CampaingnsController : ControllerBase
    {
        private readonly AlticeTestContext _context;

        public CampaingnsController(AlticeTestContext context)
        {
            _context = context;
        }

        // GET: api/Campaingns
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Campaingn>>> GetCampaingn()
        {
            return await _context.Campaingn.ToListAsync();
        }

        // GET: api/Campaingns/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Campaingn>> GetCampaingn(int id)
        {
            var campaingn = await _context.Campaingn.FindAsync(id);

            if (campaingn == null)
            {
                return NotFound();
            }

            return campaingn;
        }

        // PUT: api/Campaingns/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCampaingn(int id, Campaingn campaingn)
        {
            if (id != campaingn.Id)
            {
                return BadRequest();
            }

            _context.Entry(campaingn).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CampaingnExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Campaingns
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Campaingn>> PostCampaingn(Campaingn campaingn)
        {
            campaingn.Date = DateTime.Now;

            _context.Campaingn.Add(campaingn);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCampaingn", new { id = campaingn.Id }, campaingn);
        }

        // DELETE: api/Campaingns/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCampaingn(int id)
        {
            var campaingn = await _context.Campaingn.FindAsync(id);
            if (campaingn == null)
            {
                return NotFound();
            }

            _context.Campaingn.Remove(campaingn);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CampaingnExists(int id)
        {
            return _context.Campaingn.Any(e => e.Id == id);
        }
    }
}
