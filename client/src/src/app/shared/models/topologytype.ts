import { ITopologyItem } from './contracts/itopologyitem';

export class TopologyType  implements ITopologyItem {
    Id: string;
    Name: string;
    EnvironmentPurposes: string[];

    ODatatype: string;

    constructor() {
        this.ODatatype = "#Tridion.TopologyManager.Client.CdTopologyTypeData";
    }
}