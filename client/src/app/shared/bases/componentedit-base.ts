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


    constructor(private service: IServiceBase<T>) { }

    saveOrUpdate(event: any): void {
        if (this.isNew) {
            console.log("save");
            this.service.Create(this.model);
        } else {
            console.log("update");
            console.log(this.model);
            this.service.Update(this.model);
        }
        this.modal.hide();
    }

    show(): void {
        this.modal.show();
    }
    customTrackBy(index: number, obj: any): any {
        return index;
    }

}