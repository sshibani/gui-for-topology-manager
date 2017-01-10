import { ITopologyItem } from './contracts/itopologyitem';

export class Mapping implements ITopologyItem {
    Id: string;
    CmEnvironmentId: string;
    PublicationId: string;
    EnvironmentPurpose: string;
    WebApplicationId: string;
    RelativeUrl: string;
    PrimaryMappedUrl: string;
    IsOffline: string;
}