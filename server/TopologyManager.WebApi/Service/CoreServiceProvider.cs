using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Linq;
using TopologyManager.WebApi.Models;
using Tridion.ContentManager.CoreService.Client;
using Tridion.Extensions.CoreService;
using Tridion.Extensions.CoreService.Extensions;

namespace TopologyManager.WebApi.Service
{
    public class CoreServiceProvider
    {
        public IEnumerable<Publication> LoadPublications()
        {
            var client = Wrapper.GetCoreServiceWsHttpInstance("34.249.4.106", "administrator", "Tr1v1d3nt", string.Empty, CoreServiceInstance.SdlWeb8);

            PublicationsFilterData filter = new PublicationsFilterData();
            XElement publications = client.GetSystemWideListXml(filter);
            var list = new List<Publication>();
            foreach (XElement item in publications.DescendantNodes())
            {
                var id = item.Attribute("ID").ToString();
                var publication = id.ToTcmUri().GetItem<PublicationData>();
                var pub = new Publication()
                {
                    Id = publication.Id.ToString(),
                    Title = publication.Title,
                    RelativeUrl = publication.PublicationUrl
                };
                list.Add(pub);
            }

            return list;
        }
    }
}