import { WebApplication } from './webapplication';
import { ITopologyItem } from './contracts/itopologyitem';

export class CdEnvironment implements ITopologyItem {
    Id: string;
    EnvironmentPurpose: string;
    DiscoveryEndpointUrl: string;
    IsOffline: boolean;
    Credentials: Credentials = new Credentials();

    ODatatype: string;

    constructor() {
        this.ODatatype = "#Tridion.TopologyManager.Client.CdEnvironmentData";
    }

    static AuthenticationTypes: string[] = [ "Anonymous", "Basic", "Windows", "OAuth" ];
}

export class Credentials {
    ClientId: string;
    ClientSecret: string;
    AuthenticationType: string;

    ODatatype: string;
     constructor() {
        this.ODatatype = "#Tridion.TopologyManager.Client.AnonymousServiceCredentials";
    }
}