using Diagnostix_Backend.Accessors.Interfaces;
using Diagnostix_Backend.Contracts;
using Diagnostix_Backend.Database;
using Diagnostix_Backend.Database.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diagnostix_Backend.Accessors
{
    public class AccountAccessor : IAccountAccessor
    {
        private DatabaseContext context;
        public AccountAccessor(DatabaseContext _context)
        {
            context = _context;
        }
        public RegisterAccountContractResult RegisterAccount(RegisterAccountContract account)
        {
            if (AccountExists(account.Email))
            {
                return new RegisterAccountContractResult
                {
                    ErrorTypes = ErrorTypes.Error
                };
            }
            var AccountToAdd = new AccountDataModel
            {
                Email = account.Email,
                EncryptedPassword = account.EncryptedPassword,
                AccountType = (int)account.AccountType,
                FirstName = account.FirstName,
                LastName = account.LastName
            };
            context.Accounts.Add(AccountToAdd);
            context.SaveChanges();
            return new RegisterAccountContractResult
            {
                ErrorTypes = ErrorTypes.Success
            };
        }


        public LoginAccountContractResult LoginAccount(LoginAccountContract account)
        {
            if (context.Accounts.Any(u => u.Email == account.Email && u.EncryptedPassword == account.EncryptedPassword))
            {
                var user = (from u in context.Accounts
                            where u.Email == account.Email && u.EncryptedPassword == account.EncryptedPassword
                            select u).FirstOrDefault();

                return new LoginAccountContractResult
                {
                    Email = user.Email,
                    AccountType = user.AccountType,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    ErrorTypes = ErrorTypes.Success
                };
            }
            else
            {
                return new LoginAccountContractResult
                {
                    Email = "",
                    FirstName = "",
                    LastName = "",
                    AccountType = 0,
                    ErrorTypes = ErrorTypes.Error
                };
            }
        }


        private bool AccountExists(string email)
        {
            return context.Accounts.Any(u => u.Email == email);
        }
        public bool CreateCard(string email, string title, string desc)
        {
            var cardToAdd = new CardDataModel
            {
                Email = email, 
                Title = title,
                Description = desc
            };
            try
            {
                context.Cards.Add(cardToAdd);
                context.SaveChanges();
                return true;
            }
            catch(Exception e)
            {
                return false;
            }
        }
        public IEnumerable<CardDataModel> GetCardsByEmail(string email) 
        {
            var cards = context.Cards.Where(u => u.Email == email);
            return cards.ToList();
        }

    }
}
