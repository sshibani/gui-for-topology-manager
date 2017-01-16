import { Input, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ITopologyItem } from './../models/contracts/itopologyitem';
import { IServiceBase } from './../../services/service-base.service';
import { MessageService } from './../../services/message.service';

// export interface IComponentBase<T extends ITopologyItem> {
//         ViewCollection: T[];
//         Collection: T[];
//         ViewUpdate(event: any);
// }

export abstract class ComponentEditBase<T extends ITopologyItem> {
    @Input("Model")
    model: T;
    @ViewChild('lgModal')
    modal:any;

    tabHeader: string;
    showIdField: boolean = false;
    autoGenerateId: boolean = true;
    private _service: IServiceBase<T>;

    constructor(service: IServiceBase<T>) {
        this._service = service;
    }

    Save(event: any): void {
        console.log("save");
        this._service.Create(this.model);
        this.modal.hide();
    }

    Show(): void {
        this.modal.show();
    }
}