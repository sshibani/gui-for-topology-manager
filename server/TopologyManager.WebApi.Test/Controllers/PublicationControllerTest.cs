using Moq;
using NUnit.Framework;
using System.Collections.Generic;
using TopologyManager.WebApi.Controllers;
using TopologyManager.WebApi.Providers.Contracts;
using TopologyManager.WebApi.Test.Controllers.Bases;
using System.Web.Http;
using System.Net.Http;
using System.Linq;
using TopologyManager.WebApi.Models;

namespace TopologyManager.WebApi.Test.Controllers
{
    [TestFixture]
    public class PublicationControllerTest : BaseControllerUnitTests
    {
        internal Mock<ICoreServiceProvider> _mockCoreServiceProvider;

        [SetUp]
        public override void SetUp()
        {
            base.SetUp();

            _mockCoreServiceProvider = new Mock<ICoreServiceProvider>();
        }

        [Test]
        public void PublicationController_Get()
        {
            // Arrange
            var controller = new PublicationController(_mockCoreServiceProvider.Object);
            controller.Request = _mockHttpRequestMessage.Object;
            controller.Configuration = _mockHttpConfiguration.Object;

            // Act
            var id = "";
            var response = controller.Get(id);
            IEnumerable<Publication> result;

            Assert.IsTrue(response.TryGetContentValue(out result));
            // Assert
            //Assert.That(result.FirstOrDefault().Title.Equals("test"));
        }
    }
}