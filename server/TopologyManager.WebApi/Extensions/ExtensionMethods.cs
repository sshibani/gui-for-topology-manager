using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using TopologyManager.WebApi.Models;

namespace System
{
    public static class ExtensionMethods
    {
        public static List<TopologyEnvironment> LoadConfiguration()
        {
            var path = System.Web.Hosting.HostingEnvironment.MapPath("/env.json");
            var file = File.ReadAllText(path);

            List<TopologyEnvironment> mapping;
            var _serializer = new JsonSerializer();
            using (var inputValueReader = new StringReader(file))
            {
                JsonTextReader reader = new JsonTextReader(inputValueReader);

                mapping = _serializer.Deserialize<List<TopologyEnvironment>>(reader);
            }

            return mapping;
        }
    }
}