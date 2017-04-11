import { ISearchItem } from './contracts/itopologyitem';

import { ExtensionProperties } from './extensionproperties';

export class Mapping implements ISearchItem {
    Id: string;
    CmEnvironmentId: string;
    PublicationId: string;
    EnvironmentPurpose: string;
    WebApplicationId: string;
    RelativeUrl: string;
    PrimaryMappedUrl: string;
    IsOffline: string;
    ExtensionProperties: ExtensionProperties[];

    ODatatype: string;

    constructor() {
        this.ODatatype = '#Tridion.TopologyManager.Client.MappingData';
    }
}
