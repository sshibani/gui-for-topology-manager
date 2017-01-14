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

    constructor(private service: IServiceBase<T>) { }
    Init() {
        this.service.GetAll()
                .then(w => {
                    this.Collection = w;
                    this.ViewCollection = w;
                });

    }

    ViewUpdate(collection: T[]) {
        this.ViewCollection = collection;
    }
}