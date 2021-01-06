using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Library_manager.Models
{
    public class LibraryManagementDBContext : DbContext
    {
        public LibraryManagementDBContext(DbContextOptions<LibraryManagementDBContext> options) : base(options)
        {

        }
        public DbSet<BookDetails> BookDetails{get;set;}
        public DbSet<LoginDetails> LoginDetails { get; set; }


    }
}
