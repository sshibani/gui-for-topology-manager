import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Router } from '@angular/router';

import { MessageService } from './message.service';
import { ServiceBase } from './service-base.service';

import { CdEnvironment } from './../shared/models/cdenvironment';
import { ContextService } from './context.service';

@Injectable()
export class EnvironmentService extends ServiceBase<CdEnvironment> {

    constructor(private http: Http, private router: Router, private contextService: ContextService) {
        super(http, router, contextService, "CdEnvironments");
    }

    getCdEnvrinmentsTitle(): Promise<string[][]> {
        let p: Array<any> = Array<any>();
        return this.GetAll().then(e => {
             for (var i = 0; i < e.length; i++) {
                 p[i] = [ e[i].Id, e[i].EnvironmentPurpose];
             }
             console.log(p);
            return p;
        });
    }
}