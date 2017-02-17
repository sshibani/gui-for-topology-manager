using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace TopologyManager.WebApi.Attribute
{
    public class TopologyAuthorizeAttribute : AuthorizeAttribute
    {
        private readonly string _group;

        public TopologyAuthorizeAttribute()
        {
            _group = ConfigurationManager.AppSettings["authorized-group"]?.ToString();
        }

        protected override bool IsAuthorized(HttpActionContext actionContext)
        {
            if (_group.IsNullOrEmpty())
                return true;

            var identity = actionContext.RequestContext.Principal.IsInRole(_group);

            return identity;
        }
    }
}