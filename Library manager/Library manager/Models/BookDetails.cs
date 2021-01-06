using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Library_manager.Models
{
    public class BookDetails
    {
        [Key]
        public int BookId { get; set; }
        [Column(TypeName="nvarchar(100)")]
        public string BookName { get; set; }
        [Column(TypeName = "nvarchar(20)")]
        public int ISBN { get; set; }
        [Column(TypeName = "nvarchar(20)")]
        public string Author { get; set; }
        [Column(TypeName = "nvarchar(20)")]
        public string Category { get; set; }
        [Column(TypeName = "nvarchar(20)")]
        public string Publisher { get; set; }



       


    
    }
}
