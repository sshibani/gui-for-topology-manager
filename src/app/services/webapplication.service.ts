import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';

import { ServiceBase } from './service-base.service';

import { WebApplication } from './../shared/models/webapplication';

@Injectable()
export class WebApplicationService extends ServiceBase<WebApplication> {

    constructor(private http: Http) {
        super(http, "WebApplications");
    }

    getWebApplicationTitles(): Promise<string[]> {
          return this.GetAll().then(items => {
             let list: string[] = [];
             items.forEach(a => list = list.concat(a.Id));
             return list;
        });
    }
}