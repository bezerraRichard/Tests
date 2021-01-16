using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AlticeTest.Model;

namespace AlticeTest.Data
{
    public class AlticeTestContext : DbContext
    {
        public AlticeTestContext (DbContextOptions<AlticeTestContext> options)
            : base(options)
        {
        }

        public DbSet<AlticeTest.Model.Campaingn> Campaingn { get; set; }
    }
}
