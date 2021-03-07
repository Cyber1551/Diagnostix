using Diagnostix_Backend.Contracts;
using Diagnostix_Backend.Database.Models;
using Diagnostix_Backend.Managers;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diagnostix_Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class AccountController : Controller
    {
        private ManagerFactory managerFactory;
        public AccountController(ManagerFactory factory)
        {
            managerFactory = factory;
        }

        [HttpPost]
        public ActionResult<RegisterAccountContractResult> RegisterAccount([FromBody] RegisterAccountContract registerAccountContract)
        {
            var accountManager = managerFactory.CreateManager<AccountManager>();
            return accountManager.RegisterAccount(registerAccountContract);
        }

        [HttpPost]
        public ActionResult<LoginAccountContractResult> LoginAccount([FromBody] LoginAccountContract loginAccountContract)
        {
            var accountManager = managerFactory.CreateManager<AccountManager>();
            return accountManager.LoginAccount(loginAccountContract);
        }


        [HttpGet]
        public IEnumerable<CardDataModel> GetCardsByEmail(string email)
        {
            var accountManager = managerFactory.CreateManager<AccountManager>();
            return accountManager.GetCardsByEmail(email);
        }

        [HttpPost]
        public ActionResult<bool> CreateCard([FromBody] CreateCard createCard)
        {
            var accountManager = managerFactory.CreateManager<AccountManager>();
            return accountManager.CreateCard(createCard);
        }
    }
}
