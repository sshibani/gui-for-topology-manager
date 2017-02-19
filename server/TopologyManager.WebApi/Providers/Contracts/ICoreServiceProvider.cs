using System.Collections.Generic;
using TopologyManager.WebApi.Models;

namespace TopologyManager.WebApi.Providers.Contracts
{
    public interface ICoreServiceProvider
    {
        IEnumerable<Publication> LoadPublications(string topoEnvId);
    }
}