import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs';

import { ServiceBase } from './service-base.service';
import { ContextService } from './context.service';
import { WebApplication } from './../shared/models/webapplication';

@Injectable()
export class WebApplicationService extends ServiceBase<WebApplication> {

    constructor(private http: Http, private router: Router, private contextService: ContextService) {
        super(http, router, contextService, "WebApplications");
    }

    getWebApplicationTitles(): Observable<string[]> {
          return this.GetAll().map(items => {
             let list: string[] = [];
             items.forEach(a => list = list.concat(a.Id));
             return list;
        });
    }
}