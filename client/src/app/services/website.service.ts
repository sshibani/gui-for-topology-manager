import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Response, Http } from '@angular/http';

import { ServiceBase } from './service-base.service';
import { ContextService } from './context.service';
import { Website } from './../shared/models/website';

@Injectable()
export class WebsiteService extends ServiceBase<Website> {

    constructor(private http: Http, private router: Router, private contextService: ContextService) {
        super(http, router, contextService, "Websites");
    }

    GetByCdEnvironmentId(id: string): Promise<Website[]> {
         return this.GetAll()
                    .then(env => env.filter(e => e.CdEnvironmentId === id));
    }
}