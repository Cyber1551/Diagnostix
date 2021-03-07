using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diagnostix_Backend.Controllers
{
    [ApiController]
    [Route("/")]
    public class DefaultController : Controller
    {
        [HttpGet]
        public string Index()
        {
            return "Diagnostix API: Left blank on purpose";
        }
    }
}
