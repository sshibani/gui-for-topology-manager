import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';

import { ServiceBase } from './service-base.service';

import { Mapping } from './../shared/models/mapping';

@Injectable()
export class MappingService extends ServiceBase<Mapping> {

    constructor(private http: Http) {
        super(http, "data/mappings.json");
    }
    extractData(res: Response) {
        console.warn(res.json());
        return res.json().value as Mapping[];
    }


}