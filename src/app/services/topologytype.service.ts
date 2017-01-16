import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';


import { ServiceBase } from './service-base.service';

import { TopologyType } from './../shared/models/topologytype';

@Injectable()
export class TopologyTypeService extends ServiceBase<TopologyType> {

    constructor(private http: Http) {
        super(http, "CdTopologyTypes");
    }
}