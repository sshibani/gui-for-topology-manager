import { ITopologyItem } from './contracts/itopologyitem';

export class CmEnvironment  implements ITopologyItem {
    Id: string;


    ODatatype: string;

    constructor() {
        this.ODatatype = "#Tridion.TopologyManager.Client.CmEnvironmentData";
    }
}