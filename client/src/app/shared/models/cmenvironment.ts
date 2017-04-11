import { ITopologyItem } from './contracts/itopologyitem';
import { Credentials } from './cdenvironment';

export class CmEnvironment  implements ITopologyItem {
    Id: string;
    WebsiteRootUrl: string;
    CoreServiceRootUrl: string;
    CoreServiceCredentials: WindowsCredentials;

    ODatatype: string;

    constructor() {
        this.ODatatype = '#Tridion.TopologyManager.Client.CmEnvironmentData';
    }
}


export class WindowsCredentials extends Credentials {
    UserName: string;
    Password: string;
    constructor() {
        super('Windows',  '#Tridion.TopologyManager.Client.WindowsServiceCredentials');
    }
}
