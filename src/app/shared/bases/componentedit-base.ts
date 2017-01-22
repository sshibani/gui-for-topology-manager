import { Input, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ITopologyItem } from './../models/contracts/itopologyitem';
import { IServiceBase } from './../../services/service-base.service';
import { MessageService } from './../../services/message.service';

export abstract class ComponentEditBase<T extends ITopologyItem> {
    @Input("Model")
    model: T;
    @ViewChild('lgModal')
    modal:any;

    tabHeader: string;
    showIdField: boolean = false;
    autoGenerateId: boolean = true;
    isNew: boolean = true;
    private _service: IServiceBase<T>;

    constructor(service: IServiceBase<T>) {
        this._service = service;
    }

    saveOrUpdate(event: any): void {
        if (this.isNew) {
            console.log("save");
            this._service.Create(this.model);
        } else {
            console.log("update");
            this._service.Update(this.model);
        }
        this.modal.hide();
    }

    show(): void {
        this.modal.show();
    }
}