using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TopologyManager.WebApi.Models;

namespace TopologyManager.WebApi.Controllers
{
    public class TopologyEnvironmentController : ApiController
    {
        // GET api/values
        public IEnumerable<TopologyEnvironment> Get()
        {
            var list = ExtensionMethods.LoadConfiguration();

            return list;
        }
    }
}