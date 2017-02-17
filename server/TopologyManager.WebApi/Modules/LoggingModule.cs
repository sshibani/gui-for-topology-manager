using Autofac;
using Autofac.Core;
using Microsoft.Owin.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TopologyManager.WebApi.Logging;

namespace TopologyManager.WebApi.Modules
{
    public class LoggingModule : Module
    {
        protected override void AttachToComponentRegistration(Autofac.Core.IComponentRegistry componentRegistry, Autofac.Core.IComponentRegistration registration)
        {
            registration.Preparing += OnComponentPreparing;
        }

        private static void OnComponentPreparing(object sender, PreparingEventArgs e)
        {
            var t = e.Component.Activator.LimitType;
            e.Parameters = e.Parameters.Union(
                new[]
                {
                    new ResolvedParameter((p, i) => p.ParameterType == typeof (ILogger),
                        (p, i) => new DefaultLogger(NLog.LogManager.GetLogger(t.FullName)))
                });
        }
    }
}