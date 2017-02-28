import { Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ITopologyItem } from './../models/contracts/itopologyitem';
import { IServiceBase } from './../../services/service-base.service';
import { MessageService } from './../../services/message.service';

// export interface IComponentBase<T extends ITopologyItem> {
//         ViewCollection: T[];
//         Collection: T[];
//         ViewUpdate(event: any);
// }

export abstract class ComponentPromoboxBase<T extends ITopologyItem> {
    @Input('Model')
    model: T;

    @Input('ShowActionButtons')
    showActionButtons: boolean = true;

    private _service: IServiceBase<T>;
    constructor(service: IServiceBase<T>) {
        this._service = service;
    }

    public delete(data: T): void {
        this._service.Delete(data);
    }
}
