using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TopologyManager.WebApi.Attribute;
using TopologyManager.WebApi.Models;
using TopologyManager.WebApi.Providers.Contracts;
using TopologyManager.WebApi.Services;

namespace TopologyManager.WebApi.Controllers
{
    [TopologyAuthorize]
    public class PublicationController : ApiController
    {
        private readonly ICoreServiceProvider _coreServiceProvider;

        public PublicationController(ICoreServiceProvider coreServiceProvider)
        {
            coreServiceProvider.ThrowIfNull(nameof(coreServiceProvider));

            _coreServiceProvider = coreServiceProvider;
        }

        // GET api/values
        [TopologyAuthorize]
        public IEnumerable<Publication> Get(string id)
        {
            var identity = this.ActionContext.RequestContext.Principal.Identity;
            var list = _coreServiceProvider.LoadPublications(id);
            return list;
        }
    }
}