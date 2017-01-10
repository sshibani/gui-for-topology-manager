import { ITopologyItem } from './contracts/itopologyitem';
export class WebApplication implements ITopologyItem {
    Id: string;
    ContextUrl :string;
    WebsiteId: string;
    EnvironmentPurpose: string;
}