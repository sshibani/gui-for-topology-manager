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
    private createSubscription: Subscription;

    constructor(private service: IServiceBase<T>, private messageService: MessageService) {
            this.setSubscribers();
     }
    Init() {
        this.service.GetAll()
                .subscribe(w => {
                    this.Collection = w;
                    this.ViewCollection = w;
                });

    }

    showMessage(msgType: string, message: string): void {
        this.messageService.SendMessage(msgType, message, 5000);
    }

    ViewUpdate(collection: T[]) {
        this.ViewCollection = collection;
    }

    private setSubscribers(): void {
        this.deleteSubscription = this.service.GetDeletedMessage().subscribe(value => {
                                    this.showMessage('success', `TopologyItem with Id: ${value.Id} deleted.`);
                                    this.ViewCollection = this.ViewCollection.filter(item => item !== value);
                                    this.Collection = this.Collection.filter(item => item !== value);
                                });
        this.createSubscription = this.service.GetCreateMessage().subscribe(value => {
                                this.showMessage('success', `TopologyItem with Id: ${value.Id} created.`);
                                this.ViewCollection.push(value);
                                //this.Collection.push(value);
                            });
    }
}