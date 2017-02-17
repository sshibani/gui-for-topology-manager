using NLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TopologyManager.WebApi.Logging.Contracts;

namespace TopologyManager.WebApi.Logging
{
    public class DefaultLogger : Contracts.ILogger
    {
        private readonly Logger _logger;

        public DefaultLogger(Logger logger)
        {
            this._logger = logger;
        }
    }
}