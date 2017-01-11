import { Input } from '@angular/core';
import { ITopologyItem } from './../models/contracts/itopologyitem';

import { IServiceBase } from './../../services/service-base.service';

export interface IComponentBase<T extends ITopologyItem> {
        ViewCollection: T[];
        Collection: T[];
        Search(event: any);
}

export abstract class ComponentBase<T extends ITopologyItem> implements IComponentBase<T> {
    @Input()
    ViewCollection: T[];
    Collection: T[];
    public SearchCallback: Function;
    constructor(private service: IServiceBase<T>) { }
    Init() {
        this.service.GetAll()
                .then(w => {
                    this.Collection = w;
                    this.ViewCollection = w;
                });
        this.SearchCallback = this.Search.bind(this);
    }

    Search(event: any): void {
        console.log(event.target.value);
        this.ViewCollection = this.Collection.filter(item => item.Id.includes(event.target.value));
    }


}