using Moq;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TopologyManager.WebApi.Controllers;
using TopologyManager.WebApi.Models;
using TopologyManager.WebApi.Services.Contracts;
using TopologyManager.WebApi.Test.Controllers.Bases;
using System.Net.Http;

namespace TopologyManager.WebApi.Test.Controllers
{
    [TestFixture]
    public class TopologyEnvironmentControllerTest : BaseControllerUnitTests
    {
        internal Mock<ITopologyManagerService> _mockTopologyManagerService;

        [SetUp]
        public override void SetUp()
        {
            base.SetUp();

            _mockTopologyManagerService = new Mock<ITopologyManagerService>();

            var data = new List<TopologyEnvironment>
            {
                new TopologyEnvironment { Id = Guid.Parse("e222efea-05fd-400d-b5ce-5c844dbf4c19") ,
                                            Name = "Dev",
                                         CoreServiceEndpoint = new EndPoint { Url = "http://localhost" },
                                         TopologyManagerEndpoint =new EndPoint { Url = "http://localhost:82/ttm201601" }
                                        },
                 new TopologyEnvironment { Id = Guid.Parse("e222efea-05fd-400d-b5ce-5c8df34f4c19") ,
                                            Name = "Dev",
                                         CoreServiceEndpoint = new EndPoint { Url = "http://mylocal" },
                                         TopologyManagerEndpoint =new EndPoint { Url = "http://mylocal:82/ttm201601" }
                                        }
            };
            _mockTopologyManagerService
                    .Setup(m => m.LoadEnvironments())
                    .Returns(data);
        }

        [Test]
        public void TopologyEnvironmentController_Get()
        {
            // Arrange
            var controller = new TopologyEnvironmentController(_mockTopologyManagerService.Object);
            controller.Request = _mockHttpRequestMessage.Object;
            controller.Configuration = _mockHttpConfiguration.Object;

            // Act
            var id = "";
            var response = controller.Get();
            IEnumerable<TopologyEnvironment> result;

            Assert.IsTrue(response.TryGetContentValue(out result));
            // Assert
            Assert.True(result.Count() > 0);
        }
    }
}