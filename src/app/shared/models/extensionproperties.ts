
export class ExtensionProperties {
    Name: string;
    Value: string;

     ODatatype: string;

    constructor() {
        this.ODatatype = "#Tridion.TopologyManager.Client.ExtensionProperty";
    }

     static availableKeys: string[] = [ "AudienceManager-SynchronizationTarget", "test" ];
}