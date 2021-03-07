using Diagnostix_Backend.Accessors;
using Diagnostix_Backend.Contracts;
using Diagnostix_Backend.Database.Models;
using Diagnostix_Backend.Managers.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diagnostix_Backend.Managers
{
    public class AccountManager : IAccountManager
    {
        private AccessorFactory accessorFactory;
        public AccountManager(AccessorFactory factory)
        {
            accessorFactory = factory;
        }
        public RegisterAccountContractResult RegisterAccount(RegisterAccountContract registerAccountContract)
        {
            var accountAccessor = accessorFactory.CreateAccessor<AccountAccessor>();
            return accountAccessor.RegisterAccount(registerAccountContract);

        }
        public LoginAccountContractResult LoginAccount(LoginAccountContract loginAccountContract)
        {
            var accountAccessor = accessorFactory.CreateAccessor<AccountAccessor>();
            return accountAccessor.LoginAccount(loginAccountContract);

        }

        public IEnumerable<CardDataModel> GetCardsByEmail(string email)
        {
            var accountAccessor = accessorFactory.CreateAccessor<AccountAccessor>();
            return accountAccessor.GetCardsByEmail(email);

        }
        public bool CreateCard(CreateCard createCard)
        {
            var accountAccessor = accessorFactory.CreateAccessor<AccountAccessor>();
            return accountAccessor.CreateCard(createCard.Email, createCard.Title, createCard.Description);
        }

    }
}
