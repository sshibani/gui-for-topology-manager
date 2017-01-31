using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using TopologyManager.WebApi.Models;

namespace System
{
    public class TopologyManagerService
    {
        public IList<TopologyEnvironment> LoadEnvironments()
        {
            List<TopologyEnvironment> mapping = Load();

            return mapping;
        }

        public bool Delete(string id)
        {
            var models = Load();

            var model = models.FirstOrDefault(a => a.Name.Equals(id, StringComparison.InvariantCultureIgnoreCase));
            models.Remove(model);
            return Save(models);
        }

        public bool Update(string id, TopologyEnvironment model)
        {
            var models = Load();
            models.Remove(models.FirstOrDefault(a => a.Name.Equals(id, StringComparison.InvariantCultureIgnoreCase)));

            models.Add(model);
            return Save(models);
        }

        public bool Add(TopologyEnvironment model)
        {
            var models = Load();

            var modelExist = models.FirstOrDefault(a => a.Name.Equals(model.Name, StringComparison.InvariantCultureIgnoreCase));
            if (modelExist != null)
                return false;

            models.Add(model);
            return Save(models);
        }

        private bool Save(List<TopologyEnvironment> models)
        {
            var path = System.Web.Hosting.HostingEnvironment.MapPath("/env.json");
            if (!File.Exists(path))
                File.Create(path);

            Serialize(models, path);
            return true;
        }

        private void Serialize(List<TopologyEnvironment> models, string file)
        {
            var _serializer = new JsonSerializer();
            using (StreamWriter sw = new StreamWriter(file))
            using (JsonWriter writer = new JsonTextWriter(sw))
            {
                _serializer.Serialize(writer, models);
            }
        }

        private List<TopologyEnvironment> Load()
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

            return mapping ?? new List<TopologyEnvironment>();
        }
    }
}