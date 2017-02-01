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
        private readonly TopologyManagerService _service;

        public TopologyEnvironmentController()
        {
            _service = new TopologyManagerService();
        }

        // GET api/values
        public IEnumerable<TopologyEnvironment> Get()
        {
            var list = _service.LoadEnvironments();
            return list;
        }

        public TopologyEnvironment Get(string id)
        {
            return _service.Get(id);
        }

        public HttpResponseMessage Put([FromBody] TopologyEnvironment entity, string id)
        {
            var result = _service.Update(id, entity);
            if (result)
                return new HttpResponseMessage(HttpStatusCode.OK);
            else
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
        }

        public HttpResponseMessage Post([FromBody] TopologyEnvironment entity)
        {
            var result = _service.Add(entity);
            if (result)
                return new HttpResponseMessage(HttpStatusCode.OK);
            else
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
        }

        public HttpResponseMessage Delete(string id)
        {
            var result = _service.Delete(id);
            if (result)
                return new HttpResponseMessage(HttpStatusCode.OK);
            else
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
        }
    }
}