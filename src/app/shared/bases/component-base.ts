import { Input } from '@angular/core';
import { ITopologyItem } from './../models/contracts/itopologyitem';

import { IServiceBase } from './../../services/service-base.service';

export interface IComponentBase<T extends ITopologyItem> {
        ViewCollection: T[];
        Collection: T[];
        ViewUpdate(event: any);
}

export abstract class ComponentBase<T extends ITopologyItem> implements IComponentBase<T> {
    @Input()
    ViewCollection: T[];
    Collection: T[];

    public alerts: any = [];

    constructor(private service: IServiceBase<T>) {
         service.DeleteEvent.subscribe(value => {
                        this.showMessage('success', `TopologyItem with Id: ${value.Id} deleted.`);
                        this.ViewCollection = this.ViewCollection.filter(item => item !== value);
                        this.Collection = this.Collection.filter(item => item !== value);
                    });
        //  service.CreateEvent.subscribe((value) => {
        //                 console.log("ahh"  +  value);
        //                this.Collection.push(value);
        //                this.ViewCollection.push(value);
        //             });
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
        this.alerts.push({
                type: msgType,
                msg: message,
                timeout: 3000
            });
    }

    ViewUpdate(collection: T[]) {
        this.ViewCollection = collection;
    }
}