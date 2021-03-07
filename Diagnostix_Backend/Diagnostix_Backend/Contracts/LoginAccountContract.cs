using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diagnostix_Backend.Contracts
{
    public class LoginAccountContract
    {
        public string Email { get; set; }
        public string EncryptedPassword { get; set; }
    }
    public class LoginAccountContractResult
    {
        public string Email { get; set; }
        public int AccountType { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public ErrorTypes ErrorTypes { get; set; }
    }
}

