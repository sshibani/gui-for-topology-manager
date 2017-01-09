import { WebApplication } from './webapplication';
export class CdEnvironment {
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