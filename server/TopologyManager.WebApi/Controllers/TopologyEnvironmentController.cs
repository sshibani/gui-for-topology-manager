using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using TopologyManager.WebApi.Attribute;
using TopologyManager.WebApi.Models;
using TopologyManager.WebApi.Services;
using TopologyManager.WebApi.Services.Contracts;

namespace TopologyManager.WebApi.Controllers
{
    [TopologyAuthorize]
    public class TopologyEnvironmentController : ApiController
    {
        private readonly ITopologyManagerService _topologyManagerservice;

        public TopologyEnvironmentController(ITopologyManagerService topologyManagerService)
        {
            topologyManagerService.ThrowIfNull(nameof(topologyManagerService));

            _topologyManagerservice = topologyManagerService;
        }

        // GET api/values
        [TopologyAuthorize]
        //[Authorize(Users = "MTSUser")]
        public IEnumerable<TopologyEnvironment> Get()
        {
            var list = _topologyManagerservice.LoadEnvironments();
            return list;
        }

        [TopologyAuthorize]
        public TopologyEnvironment Get(string id)
        {
            return _topologyManagerservice.Get(id);
        }

        [TopologyAuthorize]
        public IHttpActionResult Put([FromBody] TopologyEnvironment entity, string id)
        {
            var result = _topologyManagerservice.Update(id, entity);
            if (result)
                return Content(HttpStatusCode.Created, entity);
            else
                return BadRequest();
        }

        [TopologyAuthorize]
        [ResponseType(typeof(TopologyEnvironment))]
        public IHttpActionResult Post([FromBody] TopologyEnvironment entity)
        {
            var result = _topologyManagerservice.Create(entity);
            if (result)
                return Content(HttpStatusCode.Created, entity);
            else
                return BadRequest();
        }

        [TopologyAuthorize]
        public HttpResponseMessage Delete(string id)
        {
            var result = _topologyManagerservice.Delete(id);
            if (result)
                return new HttpResponseMessage(HttpStatusCode.NoContent);
            else
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
        }
    }
}