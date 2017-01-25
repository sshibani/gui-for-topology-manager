import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';

import { ServiceBase } from './service-base.service';

import { Website } from './../shared/models/website';

@Injectable()
export class WebsiteService extends ServiceBase<Website> {

    constructor(private http: Http) {
        super(http, "Websites");
    }
     GetByCdEnvironmentId(id: string): Promise<Website[]> {
         return this.GetAll()
                    .then(env => env.filter(e => e.CdEnvironmentId === id));
    }
}