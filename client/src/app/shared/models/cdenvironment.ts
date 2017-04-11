import { WebApplication } from './webapplication';
import { ISearchItem } from './contracts/itopologyitem';

export class CdEnvironment implements ISearchItem {
    static AuthenticationTypes: string[] = [ 'Anonymous', 'OAuth' ];
    Id: string;
    EnvironmentPurpose: string;
    DiscoveryEndpointUrl: string;
    IsOffline: boolean;
    Credentials: Credentials;

    ODatatype: string;

    constructor() {
        this.ODatatype = '#Tridion.TopologyManager.Client.CdEnvironmentData';
    }
}

export class Credentials {
    AuthenticationType: string;

    ODatatype: string;
     constructor(type: string, oDataType: string) {
        this.AuthenticationType = type;
        this.ODatatype = oDataType;
    }
}

export class OAuthCredentials extends Credentials {
    ClientId: string;
    ClientSecret: string;
    constructor() {
        super('OAuth',  '#Tridion.TopologyManager.Client.OAuthServiceCredentials');
    }
}

export class AnonymousCredentials extends Credentials {
    constructor() {
        super('Anonymous',  '#Tridion.TopologyManager.Client.AnonymousServiceCredentials');
    }
}
