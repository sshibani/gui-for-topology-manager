import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Response, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ServiceBase } from './service-base.service';

import { ContextService } from './context.service';

import { TopologyType } from './../shared/models/topologytype';

@Injectable()
export class TopologyTypeService extends ServiceBase<TopologyType> {

    constructor(private http: Http, private router: Router, private contextService: ContextService) {
        super(http, router, contextService, "CdTopologyTypes");
    }

    getPurposes(): Promise<string[]> {
       return this.GetAll().then(items => {
             let list: string[] = [];
             items.forEach(a => list = list.concat(a.EnvironmentPurposes));
             return list;
        });
    }
}