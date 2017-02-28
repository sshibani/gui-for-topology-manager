using Moq;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Controllers;
using TopologyManager.WebApi.Logging.Contracts;

namespace TopologyManager.WebApi.Test.Controllers.Bases
{
    [TestFixture]
    public class BaseControllerUnitTests
    {
        internal Mock<HttpContextBase> _mockContext;
        internal Mock<HttpRequestBase> _mockRequest;
        internal Mock<HttpResponseBase> _mockResponse;
        internal Mock<HttpSessionStateBase> _mockSession;
        internal Mock<HttpServerUtilityBase> _mockServer;

        internal Mock<HttpRequestContext> _mockHttpRequestContext;
        internal Mock<HttpRequestMessage> _mockHttpRequestMessage;
        internal Mock<HttpConfiguration> _mockHttpConfiguration;

        internal Mock<ILogger> _mockLogger;

        [SetUp]
        public virtual void SetUp()
        {
            _mockContext = new Mock<HttpContextBase>();
            _mockRequest = new Mock<HttpRequestBase>();
            _mockResponse = new Mock<HttpResponseBase>();
            _mockSession = new Mock<HttpSessionStateBase>();
            _mockServer = new Mock<HttpServerUtilityBase>();

            _mockHttpRequestContext = new Mock<HttpRequestContext>();
            _mockHttpRequestMessage = new Mock<HttpRequestMessage>();
            _mockHttpConfiguration = new Mock<HttpConfiguration>();

            _mockContext.Setup(c => c.Request).Returns(_mockRequest.Object);
            _mockContext.Setup(c => c.Response).Returns(_mockResponse.Object);
            _mockContext.Setup(c => c.Session).Returns(_mockSession.Object);
            _mockContext.Setup(c => c.Server).Returns(_mockServer.Object);

            _mockLogger = new Mock<ILogger>();
        }
    }
}