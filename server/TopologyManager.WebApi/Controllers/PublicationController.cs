using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TopologyManager.WebApi.Attribute;
using TopologyManager.WebApi.Models;
using TopologyManager.WebApi.Service;

namespace TopologyManager.WebApi.Controllers
{
    [TopologyAuthorize]
    public class PublicationController : ApiController
    {
        private readonly CoreServiceProvider _provider;

        public PublicationController()
        {
            _provider = new CoreServiceProvider();
        }

        // GET api/values
        [TopologyAuthorize]
        public IEnumerable<Publication> Get(string id)
        {
            var identity = this.ActionContext.RequestContext.Principal.Identity;
            var list = _provider.LoadPublications(id);
            return list;
        }
    }
}