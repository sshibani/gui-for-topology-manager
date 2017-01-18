import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ServiceBase } from './service-base.service';

import { TopologyType } from './../shared/models/topologytype';

@Injectable()
export class TopologyTypeService extends ServiceBase<TopologyType> {

    constructor(private http: Http) {
        super(http, "CdTopologyTypes");
    }

    getPurposes(): Promise<string[]> {
       return this.GetAll().then(items => {
             let list: string[] = [];
             items.forEach(a => list = list.concat(a.EnvironmentPurposes));
             return list;
        });
    }
}