
export class ExtensionProperties {
    static availableKeys: string[] = [ 'AudienceManager-SynchronizationTarget', 'test' ];

    Name: string;
    Value: string;
    ODatatype: string;

    constructor() {
        this.ODatatype = '#Tridion.TopologyManager.Client.ExtensionProperty';
    }
}
