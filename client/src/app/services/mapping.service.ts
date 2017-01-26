import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Router } from '@angular/router';

import { ServiceBase } from './service-base.service';

import { Mapping } from './../shared/models/mapping';
import { ContextService } from './context.service';

@Injectable()
export class MappingService extends ServiceBase<Mapping> {

    constructor(private http: Http, private router: Router, private contextService: ContextService) {
        super(http, router, contextService, "Mappings");
    }
}