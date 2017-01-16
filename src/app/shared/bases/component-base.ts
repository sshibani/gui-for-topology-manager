import { Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ITopologyItem } from './../models/contracts/itopologyitem';
import { IServiceBase } from './../../services/service-base.service';
import { MessageService } from './../../services/message.service';

export interface IComponentBase<T extends ITopologyItem> {
        ViewCollection: T[];
        Collection: T[];
        ViewUpdate(event: any);
}

export abstract class ComponentBase<T extends ITopologyItem> implements IComponentBase<T> {
    @Input()
    ViewCollection: T[];
    Collection: T[];

    private deleteSubscription: Subscription;

    constructor(private service: IServiceBase<T>, private messageService: MessageService) {
        this.deleteSubscription = this.service.GetDeletedMessage().subscribe(value => {
                                    this.showMessage('success', `TopologyItem with Id: ${value.Id} deleted.`);
                                    this.ViewCollection = this.ViewCollection.filter(item => item !== value);
                                    this.Collection = this.Collection.filter(item => item !== value);
                                });
     }
    Init() {
        this.service.GetAll()
                .then(w => {
                    this.Collection = w;
                    this.ViewCollection = w;
                });

    }
    UpdateModel(model: T) {
        this.showMessage('success', `TopologyItem with Id: ${model.Id} created.`);
        this.ViewCollection.push(model);
    }

    showMessage(msgType: string, message: string): void {
        this.messageService.SendMessage(msgType, message, 5000);
    }

    ViewUpdate(collection: T[]) {
        this.ViewCollection = collection;
    }
}