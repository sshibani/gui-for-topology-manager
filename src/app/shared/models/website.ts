import { ITopologyItem } from './contracts/itopologyitem';
export class Website implements ITopologyItem {
    Id: string;
    CdEnvironmentId: string;
    EnvironmentPurpose: string;
    BaseUrls: string[];
}