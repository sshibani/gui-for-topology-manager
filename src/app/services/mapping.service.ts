import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';

import { ServiceBase } from './service-base.service';

import { Mapping } from './../shared/models/mapping';

@Injectable()
export class MappingService extends ServiceBase<Mapping> {

    constructor(private http: Http) {
        super(http, "Mappings");
    }
}