using System.Collections.Generic;
using TopologyManager.WebApi.Models;

namespace TopologyManager.WebApi.Services.Contracts
{
    public interface ITopologyManagerService
    {
        bool Create(TopologyEnvironment model);

        bool Delete(string id);

        TopologyEnvironment Get(string id);

        IList<TopologyEnvironment> LoadEnvironments();

        bool Update(string id, TopologyEnvironment model);
    }
}