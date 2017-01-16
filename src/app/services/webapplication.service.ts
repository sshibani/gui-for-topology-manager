import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';

import { ServiceBase } from './service-base.service';

import { WebApplication } from './../shared/models/webapplication';

@Injectable()
export class WebApplicationService extends ServiceBase<WebApplication> {

    constructor(private http: Http) {
        super(http, "WebApplications");
    }
}