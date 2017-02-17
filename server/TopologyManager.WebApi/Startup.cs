using Autofac;
using Autofac.Integration.WebApi;
using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using TopologyManager.WebApi.Modules;
using TopologyManager.WebApi.Providers;
using TopologyManager.WebApi.Providers.Contracts;
using TopologyManager.WebApi.Services;
using TopologyManager.WebApi.Services.Contracts;

namespace TopologyManager.WebApi
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            //Configure Web API for self - host.
            HttpConfiguration config = new HttpConfiguration();

            config.Routes.IgnoreRoute("ignore", "index.html");
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            var container = this.BuildContainer();

            config.IncludeErrorDetailPolicy = IncludeErrorDetailPolicy.Always;
            config.MapHttpAttributeRoutes();

            app.UseAutofacMiddleware(container);
            app.UseAutofacWebApi(config);
            app.UseWebApi(config);
        }

        private ILifetimeScope BuildContainer()
        {
            var builder = new ContainerBuilder();

            builder.RegisterApiControllers(typeof(Startup).Assembly);

            builder.RegisterModule<LoggingModule>();

            builder.RegisterType<FileBasedTopologyManagerService>()
                .As<ITopologyManagerService>()
                .SingleInstance();

            builder.RegisterType<CoreServiceProvider>()
                .As<ICoreServiceProvider>()
                .SingleInstance();

            return builder.Build();
        }
    }
}