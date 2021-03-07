using Diagnostix_Backend.Contracts;
using Diagnostix_Backend.Database.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diagnostix_Backend.Accessors.Interfaces
{
    public interface IAccountAccessor : IBaseAccessor
    {
        RegisterAccountContractResult RegisterAccount(RegisterAccountContract account);
        LoginAccountContractResult LoginAccount(LoginAccountContract account);

        IEnumerable<CardDataModel> GetCardsByEmail(string email);
        bool CreateCard(string email, string title, string desc);
    }
}
