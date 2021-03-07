using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

public enum AccountType
{
    Patient = 0,
    Doctor = 1
}

namespace Diagnostix_Backend.Database.Models
{
    [Table("Accounts")]
    public class AccountDataModel
    {
        [Key]
        public int Id { get; set; }
        public string Email { get; set; }
        public string EncryptedPassword { get; set; }
        public int AccountType { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

    }
}
