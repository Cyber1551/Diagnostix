using Diagnostix_Backend.Contracts;
using Diagnostix_Backend.Database.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diagnostix_Backend.Managers.Interfaces
{
    public interface IAccountManager : IBaseManager
    {
        RegisterAccountContractResult RegisterAccount(RegisterAccountContract registerAccountContract);
        LoginAccountContractResult LoginAccount(LoginAccountContract loginAccountContract);

        IEnumerable<CardDataModel> GetCardsByEmail(string email);
        bool CreateCard(CreateCard createCard);
    }
}
