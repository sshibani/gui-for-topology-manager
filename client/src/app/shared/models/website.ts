import { ISearchItem } from './contracts/itopologyitem';
export class Website implements ISearchItem {
    Id: string;
    CdEnvironmentId: string;
    EnvironmentPurpose: string;
    BaseUrls: string[];

    ODatatype: string;

    constructor() {
        this.ODatatype = "#Tridion.TopologyManager.Client.WebsiteData";
    }
}