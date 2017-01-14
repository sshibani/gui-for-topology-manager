import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';

import { ServiceBase } from './service-base.service';

import { WebApplication } from './../shared/models/webapplication';

@Injectable()
export class WebApplicationService extends ServiceBase<WebApplication> {

    constructor(private http: Http) {
        super(http, "data/webapplications.json");
    }
    extractData(res: Response) {
        console.warn(res.json());
        return res.json().value as WebApplication[];
    }

    handleCreate(res: Response) {

    }
    handleDelete(res: Response) {

    }
}