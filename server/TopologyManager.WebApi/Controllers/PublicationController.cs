using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TopologyManager.WebApi.Models;
using TopologyManager.WebApi.Service;

namespace TopologyManager.WebApi.Controllers
{
    public class PublicationController : ApiController
    {
        private readonly CoreServiceProvider _provider;

        public PublicationController()
        {
            _provider = new CoreServiceProvider();
        }

        // GET api/values
        public IEnumerable<Publication> Get(string id)
        {
            var list = _provider.LoadPublications(id);
            return list;
        }
    }
}