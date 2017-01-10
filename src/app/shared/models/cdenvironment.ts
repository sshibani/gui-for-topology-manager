import { WebApplication } from './webapplication';
import { ITopologyItem } from './contracts/itopologyitem';

export class CdEnvironment implements ITopologyItem {
    Id: string;
    EnvironmentPurpose: string;
    DiscoveryEndpointUrl: string;
    IsOffline: boolean;
    Credentials: Credentials;
}

export class Credentials {
    ClientId: string;
    ClientSecret: string;
    AuthenticationType: string;
}