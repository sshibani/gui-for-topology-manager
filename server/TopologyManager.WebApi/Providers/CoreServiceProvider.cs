using System.ServiceModel;
using System.Xml;
using Tridion.ContentManager.CoreService.Client;
using TopologyManager.WebApi.Models;
using Tridion.Extensions.CoreService;
using Tridion.Extensions.CoreService.Extensions;
using System.Collections.Generic;
using System.Xml.Linq;
using TopologyManager.WebApi.Services.Contracts;
using System;
using TopologyManager.WebApi.Providers.Contracts;

namespace TopologyManager.WebApi.Providers
{
    public class CoreServiceProvider : ICoreServiceProvider
    {
        private readonly ITopologyManagerService _topologyManagerService;
        private readonly string _domain;
        private readonly string _password;
        private readonly string _userName;

        public CoreServiceProvider(ITopologyManagerService topologyManagerService,
                                   string domain,
                                   string userName,
                                   string password)
        {
            topologyManagerService.ThrowIfNull(nameof(topologyManagerService));
            userName.ThrowIfNull(nameof(userName));
            domain.ThrowIfNull(nameof(domain));
            password.ThrowIfNull(nameof(password));

            _userName = userName;
            _domain = domain;
            _password = password;
            _topologyManagerService = topologyManagerService;
        }

        public IEnumerable<Publication> LoadPublications(string topoEnvId)
        {
            var topo = _topologyManagerService.Get(topoEnvId);

            var uri = new Uri(topo.CoreServiceEndpoint.Url);

            var client = Wrapper.GetCoreServiceWsHttpInstance(uri.Host, _userName, _password, _domain, CoreServiceInstance.SdlWeb8);
            //var client = this.GetCoreServiceWsHttpInstance(topo.CoreServiceEndpoint.Url, CoreServiceInstance.SdlWeb8);

            PublicationsFilterData filter = new PublicationsFilterData();
            XElement publications = client.GetSystemWideListXml(filter);
            var list = new List<Publication>();

            foreach (XElement item in publications.DescendantNodes())
            {
                var id = item.Attribute("ID").Value;
                var publication = client.Read(id, new ReadOptions()) as PublicationData;
                //var publication = id.ToTcmUri().GetItem<PublicationData>();
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

        //private SessionAwareCoreServiceClient GetCoreServiceWsHttpInstance(string hostName, CoreServiceInstance version)
        //{
        //    var httpBinding = new WSHttpBinding
        //    {
        //        MaxReceivedMessageSize = 2147483647,
        //        ReaderQuotas = new XmlDictionaryReaderQuotas
        //        {
        //            MaxStringContentLength = 2147483647,
        //            MaxArrayLength = 2147483647
        //        }
        //    };
        //    httpBinding.Security.Transport.ClientCredentialType = HttpClientCredentialType.Windows;

        //    var remoteAddress =
        //        new EndpointAddress(
        //            string.Format("http://{0}/webservices/CoreService{1}.svc/wsHttp", hostName, (int)version));
        //    //var d = new CoreServiceClient(httpBinding, remoteAddress);
        //    //d.ClientCredentials.
        //    var coreServiceClient = new SessionAwareCoreServiceClient(httpBinding, remoteAddress);

        //    //var core = new CoreServiceClient(httpBinding, remoteAddress);

        //    //var identity = System.Web.HttpContext.Current.User.Identity;
        //    //coreServiceClient.ClientCredentials.Windows.ClientCredential = identity.;
        //    coreServiceClient.GetApiVersion();
        //    //if (!string.IsNullOrEmpty(username) && !string.IsNullOrEmpty(password))
        //    //{
        //    //    coreServiceClient.ClientCredentials.Windows.ClientCredential.UserName = username;
        //    //    coreServiceClient.ClientCredentials.Windows.ClientCredential.Password = password;
        //    //}

        //    //if (!string.IsNullOrEmpty(domain))
        //    //    coreServiceClient.ClientCredentials.Windows.ClientCredential.Domain = domain;

        //    //coreServiceClient.Impersonate("Siavash Shibani");

        //    return coreServiceClient;
        //}
    }
}