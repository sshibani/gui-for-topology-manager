using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TopologyManager.WebApi.Models
{
    public class TopologyEnvironment
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public EndPoint CoreServiceEndpoint { get; set; }
        public EndPoint TopologyManagerEndpoint { get; set; }
    }

    public class EndPoint
    {
        public string Url { get; set; }
        public string Domain { get; set; }
        public string UserName { get; set; }

        public string Password { get; set; }
    }
}