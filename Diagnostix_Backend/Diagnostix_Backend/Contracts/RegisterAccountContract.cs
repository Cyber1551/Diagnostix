using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;



namespace Diagnostix_Backend.Contracts
{
    public enum ErrorTypes
    {
        Success = 0,
        Error = 1
    }
    public class RegisterAccountContract
    {
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EncryptedPassword { get; set; }
        public AccountType AccountType { get; set; }
    }
    public class RegisterAccountContractResult
    {
        public ErrorTypes ErrorTypes { get; set; }
    }
}
