import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';

import { ServiceBase } from './service-base.service';

import { Website } from './../shared/models/website';

@Injectable()
export class WebsiteService extends ServiceBase<Website> {

    constructor(private http: Http) {
        super(http);
    }
    extractData(res: Response) {
        console.warn(res.json());
        return res.json().value as Website[];
    }
}