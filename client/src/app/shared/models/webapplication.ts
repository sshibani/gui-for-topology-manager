import { ITopologyItem } from './contracts/itopologyitem';
export class WebApplication implements ITopologyItem {
    Id: string;
    ContextUrl: string;
    WebsiteId: string;
    EnvironmentPurpose: string;

    ODatatype: string;

    constructor() {
        this.ODatatype = '#Tridion.TopologyManager.Client.WebApplicationData';
    }
}
