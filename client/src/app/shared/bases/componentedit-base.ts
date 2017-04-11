import { Input, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ITopologyItem } from './../models/contracts/itopologyitem';
import { IServiceBase } from './../../services/service-base.service';
import { MessageService } from './../../services/message.service';

export abstract class ComponentEditBase<T extends ITopologyItem> {
    @Input('Model')
    model: T;
    @ViewChild('lgModal')
    modal: any;

    tabHeader: string;
    showIdField = false;
    autoGenerateId = true;
    isNew = true;

    constructor(private service: IServiceBase<T>, private messageService: MessageService) { }

    saveOrUpdate(event: any): void {
        if (this.isNew) {
            this.service.Create(this.model)
                        .subscribe(a => a,
                                    e => this.handleError(e));
        } else {
            this.service.Update(this.model)
                        .subscribe(a => a,
                                   e => this.handleError(e));
        }
        this.modal.hide();
    }

    show(): void {
        this.modal.show();
    }
    customTrackBy(index: number, obj: any): any {
        return index;
    }

    handleError(e: any) {
        const error =  JSON.parse(e._body).error;
        this.messageService.SendMessage('danger', error.code + ' - ' + error.message , 10000);
    }
}
